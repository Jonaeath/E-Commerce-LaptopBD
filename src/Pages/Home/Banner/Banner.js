import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import slide01 from '../../../Asset/Image/slide01.jpeg';
import slide02 from '../../../Asset/Image/slide02.webp';
import slide03 from '../../../Asset/Image/slide03.jpeg';
import slide04 from '../../../Asset/Image/slide04.jpeg';
import slide05 from '../../../Asset/Image/slide05.jpeg';
import slide06 from '../../../Asset/Image/slide06.jpeg';



const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div className="content-center">
      <Slider {...settings}>
        <div>
        <img className="slideImage" src={slide01} alt="" />
        </div>
        <div>
          <img className="slideImage" src={slide02} alt="" />
        </div>
        <div>
        <img className="slideImage" src={slide03} alt="" />
        </div>
        <div>
        <img className="slideImage" src={slide04} alt="" />
        </div>
        <div>
        <img className="slideImage" src={slide05} alt="" />
        </div>
        <div>
        <img className="slideImage" src={slide06} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
