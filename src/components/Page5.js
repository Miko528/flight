import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Page5.css";

function Page5() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings} id="Page5">
      <Wrap>
        <img src="/images/firstslider.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/secondslider.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/thirdslider.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default Page5;

const Carousel = styled(Slider)`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Wrap = styled.div`
  img {
    height: 100%;
    width: 100%;

    @media (max-width: 650px) {
      height: 100%;
      width: auto;
      background: center center;
    }
  }
`;
