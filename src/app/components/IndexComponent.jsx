import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const IndexComponent = () => {
  const { t } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    typeof window !== "undefined" ? useTranslation() : { t: (key) => key };

  const sections = [
    {
      heading: "THEATRE",
      text: "THEATRE",
      button: "Gallery",
      images: [
        "/images/gengszterek a1 04.jpg",
        "/images/pomade a4 07.jpg",
        "/images/IK-12.jpg",
        "/images/IK-13.jpg",
        "/images/IK-15.jpg",
        "/images/IK-58.jpg",
        "/images/IK-64.jpg",
        "/images/IK-68.jpg",
        "/images/IK.jpg",
      ],
    },
    {
      heading: "FASHION",
      text: "FASHION",
      button: "Gallery",
      images: [
        "/images/05.jpg",
        "/images/10.jpg",
        "/images/12.jpg",
        "/images/22.jpg",
        "/images/28.jpg",
        "/images/29.jpg",
        "/images/30.jpg",
        "/images/35.jpg",
      ],
    },
    {
      heading: "PORTRAIT",
      text: "PORTRAIT",
      button: "Gallery",
      images: [
        "/images/DSC_1017 copy 3.jpg",
        "/images/DSC_1040 copy 3.jpg",
        "/images/DSC_1065-2 copy 3.jpg",
        "/images/DSC_1197-3 copy.jpg",
        "/images/DSC_7618.jpg",
        "/images/DSC_7619.jpg",
        "/images/DSC_7798.jpg",
        "/images/DSC_7861.jpg",
        "/images/DSC_7878.jpg",
      ],
    },
    {
      heading: "EVENT",
      text: "EVENT",
      button: "Gallery",
      images: [
        "/images/ZSA_7428.jpg",
        "/images/ZSA_7688.jpg",
        "/images/ZSA_7750.jpg",
        "/images/ZSA_8096.jpg",
        "/images/ZSA_2696.jpg",
        "/images/ZSA_2692-2.jpg",
        "/images/DSC_9876.jpg",
        "/images/DSC_9963.jpg",
        "/images/DSC_9992 copy.jpg",
      ],
    },
    {
      heading: "PET",
      text: "PET",
      button: "Gallery",
      images: [
        "/images/DSC_0828 copydone copy.jpg",
        "/images/DSC_0793-3 copy.jpg",
        "/images/DSC_0997-3 copy 5.jpg",
        "/images/DSC_1138-2 copy3.jpg",
        "/images/DSC_1168-2 copy 4.jpg",
        "/images/DSC_1181-2 copy.jpg",
      ],
    },
  ];

  const [selectedGallery, setSelectedGallery] = useState(null);

  useEffect(() => {
    let cont = document.querySelector(".cont");
    let elsArr = [].slice.call(document.querySelectorAll(".el"));
    let closeBtnsArr = [].slice.call(
      document.querySelectorAll(".el__close-btn")
    );

    setTimeout(() => {
      cont.classList.remove("s--inactive");
    }, 200);

    elsArr.forEach((el) => {
      el.addEventListener("click", function () {
        if (this.classList.contains("s--active")) return;
        cont.classList.add("s--el-active");
        this.classList.add("s--active");
      });
    });

    closeBtnsArr.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        cont.classList.remove("s--el-active");
        const activeElement = document.querySelector(".el.s--active");

        if (activeElement) {
          activeElement.classList.remove("s--active");
        }
      });
    });
  }, []);

  const handleGalleryClick = (index) => {
    setSelectedGallery(index);
  };

  const handleCloseGallery = () => {
    setSelectedGallery(null);
  };

  return (
    <div>
      <div className="cont s--inactive">
        <div className="cont__inner">
          {sections.map((section, index) => (
            <div className="el" key={index}>
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont"></div>
                  <div className="el__content">
                    <div className="el__text">{section.text}</div>
                    {section.button && (
                      <div
                        className="gallery-button"
                        onClick={() => handleGalleryClick(index)}
                      >
                        {section.button}
                      </div>
                    )}
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

      {selectedGallery !== null && (
        <div className="gallery-popup">
          <button className="close-button" onClick={handleCloseGallery}>
            Close
          </button>
          <div className="gallery-images">
            {sections[selectedGallery].images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Gallery ${selectedGallery + 1} Image ${idx + 1}`}
              />
            ))}
          </div>
          <style jsx>{`
            .gallery-popup {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.7);
              color: white;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              z-index: 1000;
              overflow-y: auto;
            }
            .gallery-images {
              max-height: 80vh; /* Limit the height of the gallery */
              overflow-y: auto; /* Enable scrolling if content overflows */
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
            .gallery-images img {
              max-width: 90%;
              max-height: 80vh;
              margin: 10px;
            }
            .close-button {
              position: absolute;
              top: 10px;
              right: 10px;
              background: red;
              color: white;
              border: none;
              padding: 10px;
              cursor: pointer;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default IndexComponent;
