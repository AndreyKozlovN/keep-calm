"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./style.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import useDetectScroll from "@smakss/react-scroll-direction";
import { useInView } from "react-hook-inview";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

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
  const mobile = useMediaQuery("(max-width: 768px)");
  const scrollDir = useDetectScroll({});

  const [componentRef, isVisibleComponentRef] = useInView({
    threshold: 1,
    rootMargin: "0px 0px 0px 0px",
  });

  const slider = useRef();

  const settings = {
    cssEase: "linear",
    dots: true,
    arrows: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 4.5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const [endSlider, setEndSlider] = useState(false);
  const [startSlider, setStartSlider] = useState(true);

  const getLastSlideClasses = () => {
    const parentElement = document.querySelector(".slick-track");
    if (parentElement) {
      const lastChildElement = parentElement.lastElementChild;
      if (lastChildElement.classList.contains("slick-active")) {
        setEndSlider(true);
      } else {
        setEndSlider(false);
      }
    }
  };
  const getFirstSlideClasses = () => {
    const parentElement = document.querySelector(".slick-track");
    if (parentElement) {
      const firstChildElement = parentElement.firstElementChild;
      if (firstChildElement.classList.contains("slick-active")) {
        setStartSlider(true);
      } else {
        setStartSlider(false);
      }
    }
  };

  useEffect(() => {
    if (isVisibleComponentRef && !mobile) {
      if (scrollDir == "down") {
        document.body.style.overflowY = "hidden";
        if (endSlider) {
          document.body.style.overflowY = "visible";
        }
      } else if (scrollDir == "up") {
        document.body.style.overflowY = "hidden";
        if (startSlider) {
          document.body.style.overflowY = "visible";
        }
      }
    }
  }, [endSlider, isVisibleComponentRef, mobile, scrollDir, startSlider]);

  const goNext = () => {
    if (mobile) return;
    slider.current.slickNext();
    getLastSlideClasses();
    getFirstSlideClasses();
  };
  const goPrev = () => {
    if (mobile) return;
    slider.current.slickPrev();
    getLastSlideClasses();
    getFirstSlideClasses();
  };

  return (
    <section ref={componentRef}>
      <ReactScrollWheelHandler
        downHandler={goNext}
        upHandler={goPrev}
        timeout={0}
      >
        <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
        <div className={styles.sliderWrapper}>
          <Slider {...settings} ref={slider}>
            {images.map((item) => {
              return (
                <div key={item.src} className={styles.image}>
                  <Image src={item.src} alt={"slider-photo"} fill />
                </div>
              );
            })}
          </Slider>
        </div>
      </ReactScrollWheelHandler>
    </section>
  );
};

export default SliderCarousel;
