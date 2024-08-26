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
        "/images/1/1.jpg",
        "/images/1/11.jpg",
        "/images/1/13.jpg",
        "/images/1/14.jpg",
        "/images/1/15.jpg",
        "/images/1/16.jpg",
        "/images/1/17.jpg",
        "/images/1/18.jpg",
        "/images/1/19.jpg",
        "/images/1/111.jpg",
        "/images/1/112.jpg",
        "/images/1/113.jpg",
        "/images/1/114.jpg",
        "/images/1/115.jpg",
      ],
    },
    {
      heading: "FASHION",
      text: "FASHION",
      button: "Gallery",
      images: [
        "/images/2/2.jpg",
        "/images/2/21.jpg",
        "/images/2/22.jpg",
        "/images/2/23.jpg",
        "/images/2/24.jpg",
        "/images/2/25.jpg",
        "/images/2/26.jpg",
        "/images/2/28.jpg",
        "/images/2/29.jpg",
      ],
    },
    {
      heading: "PORTRAIT",
      text: "PORTRAIT",
      button: "Gallery",
      images: [
        "/images/3/30.jpg",
        "/images/3/31.jpg",
        "/images/3/32.jpg",
        "/images/3/33.jpg",
        "/images/3/34.jpg",
        "/images/3/35.jpg",
        "/images/3/36.jpg",
        "/images/3/37.jpg",
        "/images/3/38.jpg",
      ],
    },
    {
      heading: "EVENT",
      text: "EVENT",
      button: "Gallery",
      images: [
        "/images/4/41.jpg",
        "/images/4/42.jpg",
        "/images/4/43.jpg",
        "/images/4/444.jpg",
        "/images/4/44.jpg",
        "/images/4/45.jpg",
        "/images/4/46.jpg",
        "/images/4/47.jpg",
        "/images/4/48.jpg",
      ],
    },
    {
      heading: "PET",
      text: "PET",
      button: "Gallery",
      images: [
        "/images/5/50.jpg",
        "/images/5/51.jpg",
        "/images/5/52.jpg",
        "/images/5/53.jpg",
        "/images/5/54.jpg",
        "/images/5/55.jpg",
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
