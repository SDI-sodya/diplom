'use client';
import styles from './HomeSplide.module.css';
import { useEffect } from "react";
import Splide from "@splidejs/splide";

export default function HomeSplide() {
  useEffect(() => {
    new Splide(".home-splide", {
      type: 'loop',
      drag: false,
      // autoplay: true,
      // interval: 5000,
      // pauseOnFocus: true,
      // pauseOnHover: true,
      // resetProgress: true,
    }).mount();
  }, []);

  return (
    <div className={`splide ${styles.homeSplide} home-splide`} aria-label="Splide Basic HTML Example">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <div className={`${styles.sliderContainer}`}>
              <h2 className={`${styles.splideTitle}`}>Церква &quot;Перемога&quot; - місце для всієї родини, покликана для всього світу</h2>
            </div>
          </li>
          <li className="splide__slide">
            <div className={`${styles.sliderContainer}`}>
              <h2 className={`${styles.splideTitle}`}>Slide 2</h2>
            </div>
          </li>
          <li className="splide__slide">
            <div className={`${styles.sliderContainer}`}>
              <h2 className={`${styles.splideTitle}`}>Slide 3</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}