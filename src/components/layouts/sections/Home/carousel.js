import React from "react";
import "../../../../styles/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Banner() {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      renderIndicator={(clickHandler, isSelected) => {
        return (
          <li className={`carousel-indecator ${isSelected ? `selected` : ''}`} onClick={clickHandler}></li>
        );
      }}
      renderArrowPrev={(clickHandler) => <div className="left-btn primary-cta" onClick={clickHandler}>left</div>}
      renderArrowNext={(clickHandler) => <div className="right-btn primary-cta" onClick={clickHandler}>right</div>}
    >
      <div className="carousel-img">
        <img src="//unsplash.it/1520/360" />
      </div>
      <div className="carousel-img">
        <img src="//unsplash.it/1519/361" />
      </div>
      <div className="carousel-img">
        <img src="//unsplash.it/1520/360" />
      </div>
      <div className="carousel-img">
        <img src="//unsplash.it/1519/361" />
      </div>
      <div className="carousel-img">
        <img src="//unsplash.it/1520/360" />
      </div>
      <div className="carousel-img">
        <img src="//unsplash.it/1519/361" />
      </div>
    </Carousel>
  );
}
