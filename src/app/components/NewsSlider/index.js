'use client';
import styles from './NewsSlider.module.css';
import { useEffect } from "react";
import Splide from "@splidejs/splide";
import Image from 'next/image';

export default function NewsSlider() {
  useEffect(() => {
    new Splide(".news-slider", {
      type: 'loop',
      drag: false,
      gap: '100px',
      height: '9rem',
      perPage: 3,
      breakpoints: {
        640: { height: '6rem' },
      },
      // autoplay: true,
      // interval: 5000,
      // pauseOnFocus: true,
      // pauseOnHover: true,
      // resetProgress: true,
    }).mount();
  }, []);

  return (
    <div className='wrapper'>
      <h2>Головні новини</h2>
      <section className="splide news-slider" aria-label="Slide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <div className={`splide__slide__container`}>
                <div className={`${styles.image}`}>1</div>
              </div>
              Lorem Ipsum Dolor Sit Amet
            </li>
            <li className="splide__slide">
              <div className={`splide__slide__container`}>
                <div className={`${styles.image}`}>2</div>
              </div>
              Lorem Ipsum Dolor Sit Amet
            </li>
            <li className="splide__slide">
              <div className={`splide__slide__container`}>
                <div className={`${styles.image}`}>3</div>
              </div>
              Lorem Ipsum Dolor Sit Amet
            </li>
            <li className="splide__slide">
              <div className={`splide__slide__container`}>
                <div className={`${styles.image}`}>4</div>
              </div>
              Lorem Ipsum Dolor Sit Amet
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}