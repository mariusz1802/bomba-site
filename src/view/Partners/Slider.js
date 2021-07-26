import React from "react";
import { Slide } from "react-slideshow-image";
import "./style.css";
import slide1 from "./images/slide_1.jpg";
import slide2 from "./images/slide_2.jpg";
import slide3 from "./images/slide_3.jpg";

const properties = {
  duration: 3000,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: false,
  indicators: true,
};

const properties_one = {
  duration: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  indicators: true,
};

function Slider() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = setTimeout((_) => {
          timer = null;
          fn.apply(this, arguments);
        }, ms);
      });
    };
  }

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <>
      {dimensions.width > 900 ? (
        <Slide easing="ease" {...properties}>
          <div className="each-slide">
            <div
              className="image"
              style={{ backgroundImage: `url(${slide1})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="image"
              style={{ backgroundImage: `url(${slide2})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="image"
              style={{ backgroundImage: `url(${slide3})` }}
            ></div>
          </div>
        </Slide>
      ) : (
        <Slide easing="ease" {...properties_one}>
          <div className="each-slide">
            <div
              className="image"
              style={{ backgroundImage: `url(${slide1})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="image"
              style={{ backgroundImage: `url(${slide2})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="image"
              style={{ backgroundImage: `url(${slide3})` }}
            ></div>
          </div>
        </Slide>
      )}
    </>
  );
}

export default Slider;
