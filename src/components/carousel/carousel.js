import React, { useState, useEffect } from "react";
import "./carousel.css";
export const Carousel = ({ pics, caption }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = pics.map((pic) => {
    return (
      <div
        className="slide"
        style={{ display: pics.indexOf(pic) == slideIndex ? "block" : "none" }}
      >
        <img src={pic} />
        <div className="caption"></div>
      </div>
    );
  });
  useEffect(() => {
    const autoslider = setInterval(() => {
      if (slideIndex >= 0) {
        setSlideIndex((previousSlideIndex) =>
          slideIndex < slides.length - 1 ? previousSlideIndex + 1 : 0
        );
      } else if (slideIndex === 0) {
        clearInterval(autoslider);
      }
    }, 5000);
    return () => {
      clearInterval(autoslider);
    };
  }, [slideIndex]);
  return (
    <>
      <div className="carousel-box">
        {slides}
        <div className="buttons">
          <a
            className="prev"
            onClick={() => setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0)}
          >
            &#10094;
          </a>
          <a
            className="next"
            onClick={() =>
              setSlideIndex(
                slideIndex < pics.length - 1 ? slideIndex + 1 : pics.length - 1
              )
            }
          >
            &#10095;
          </a>
        </div>
      </div>
      <div className="dot-box">
        {slides.map((slide) => {
          return (
            <span
              className={
                slides.indexOf(slide) === slideIndex ? "dot active" : "dot"
              }
              onClick={() => setSlideIndex(slides.indexOf(slide))}
            ></span>
          );
        })}
      </div>
    </>
  );
};
const CarouselDotMap = ({ slides, slideIndex }) => {
  return (
    <div className="dot-box">
      {slides.map((slide) => {
        return (
          <span
            className={
              slides.indexOf(slide) === slideIndex ? "dot active" : "dot"
            }
          ></span>
        );
      })}
    </div>
  );
};
