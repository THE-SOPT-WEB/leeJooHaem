import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Main() {
  return (
    <S.Container>
      <Slider {...settings}>
        <div>
          <S.Item>Slide 1</S.Item>
        </div>
        <div>
          <S.Item onClick={() => window.alert("herre")}>Slide 2</S.Item>
        </div>
        <div>
          <S.Item>Slide 3</S.Item>
        </div>
        <div>
          <S.Item>Slide 4</S.Item>
        </div>
      </Slider>
    </S.Container>
  );
}

const S = {
  Container: styled.main`
    width: 400px;
    margin: 100px auto;

    background-color: #eeeeee;
  `,
  Item: styled.h3`
    width: 200px;
    height: 300px;

    background-color: green;

    margin: auto;
  `,
};
