import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const IndexComponent = () => {
  const { t } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    typeof window !== "undefined" ? useTranslation() : { t: (key) => key };
  const sections = [
    { heading: "THEATRE", text: "Content for Section 1" },
    { heading: "FASHION", text: "Content for Section 2" },
    { heading: "PORTRAIT", text: "Content for Section 3" },
    { heading: "EVENT", text: "Content for Section 4" },
    { heading: "ABOUT", text: "Content for Section 5" },
  ];

  useEffect(() => {
    let cont = document.querySelector(".cont");
    let elsArr = [].slice.call(document.querySelectorAll(".el"));
    let closeBtnsArr = [].slice.call(
      document.querySelectorAll(".el__close-btn")
    );

    setTimeout(function () {
      cont.classList.remove("s--inactive");
    }, 200);

    elsArr.forEach(function (el) {
      el.addEventListener("click", function () {
        if (this.classList.contains("s--active")) return;
        cont.classList.add("s--el-active");
        this.classList.add("s--active");
      });
    });

    closeBtnsArr.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        cont.classList.remove("s--el-active");
        const activeElement = document.querySelector(".el.s--active");

        if (activeElement) {
          activeElement.classList.remove("s--active");
        }
      });
    });
  }, []);

  return (
    <div>
      <div className="cont s--inactive">
        <div className="cont__inner">
          {sections.map((section, index) => (
            <div className="el" key={index}>
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                   
                  </div>
                  <div className="el__content">
                    <div className="el__text">{section.text}</div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
              <div className="el__index">
                <div className="el__index-back">{section.heading}</div>
                <div className="el__index-front">
                  <div
                    className="el__index-overlay"
                    data-index={section.heading}
                  >
                    {section.heading}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexComponent;
