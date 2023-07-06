"use client";

import React, { useRef } from "react";
import styles from "./style.module.css";
import { debounce } from "lodash";
import Slider from "react-slick";

const HorizontalSlider = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  //   const onWheelSlider = debounce((e, ref) => {
  //     if (e.deltaX > 0) {
  //       ref.current.slickNext();
  //     } else if (e.deltaX < 0) {
  //       ref.current.slickPrev();
  //     }
  //   }, 20);

  return (
    // <div className={styles.wrapper} onWheel={onWheelSlider}>
    <Slider ref={sliderRef} {...settings}>
      <div className={styles.item}>1</div>
      <div className={styles.item}>2</div>
      <div className={styles.item}>3</div>
      <div className={styles.item}>4</div>
      <div className={styles.item}>5</div>
      <div className={styles.item}>6</div>
      <div className={styles.item}>7</div>
    </Slider>
    // </div>
  );
};

export default HorizontalSlider;
