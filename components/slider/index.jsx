"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./style.module.css";
import useDetectScroll from "@smakss/react-scroll-direction";
import { useInView } from "react-hook-inview";

const images = [
  {
    src: "/images/slider/1.jpg",
  },
  {
    src: "/images/slider/2.jpg",
  },
  {
    src: "/images/slider/3.jpg",
  },
  {
    src: "/images/slider/4.jpg",
  },
  {
    src: "/images/slider/5.jpg",
  },
  {
    src: "/images/slider/6.jpg",
  },
  {
    src: "/images/slider/7.jpg",
  },
  {
    src: "/images/slider/8.jpg",
  },
];

const SliderCarousel = () => {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [componentRef, isVisibleComponentRef] = useInView({
    threshold: 1,
  });
  const scrollDir = useDetectScroll({});
  const slider = useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gotoNext = () => {
    slider.current.slickNext();
  };

  const gotoPrev = () => {
    slider.current.slickPrev();
  };

  useEffect(() => {
    if (isVisibleComponentRef) {
      document.body.style.overflow = "hidden";
    }
    if (activeSlide2 <= activeSlide) {
      document.body.style.overflow = "visible";
    }
  }, [activeSlide, activeSlide2, isVisibleComponentRef]);

  useEffect(() => {
    if (!isVisibleComponentRef) return;
    if (scrollDir == "up") {
      gotoPrev();
    } else if (scrollDir == "down") {
      gotoNext();
    }
  }, [isVisibleComponentRef, scrollDir]);

  return (
    <section ref={componentRef}>
      <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
      <div className={styles.sliderWrapper}>
        <Slider {...settings} ref={slider}>
          {images.map((item, index) => {
            return (
              <div key={item.src} className={styles.image}>
                <Image src={item.src} alt={"slider-photo"} fill />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SliderCarousel;
