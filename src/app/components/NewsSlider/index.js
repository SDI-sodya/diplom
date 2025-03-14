'use client';
import styles from './NewsSlider.module.css';
import { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import SlidesList from './SlidesList';

export default function NewsSlider() {

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Загрузка данных из JSON-файла
    fetch('/data/news.json')
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error('Error loading slides:', error));
  }, []);


  useEffect(() => {
    if (slides.length > 0) {
      const splide = new Splide(".news-slider", {
        type: 'loop',
        gap: '30px',
        perPage: 3,
      });
  
      splide.mount();
    }
  }, [slides]);

  return (
    <div className={`wrapper ${styles.newsSection}`}>
      <h2 className={`${styles.sectionTitle}`}>Новини</h2>
      <section className={`splide news-slider ${styles.slider}`} aria-label="Slide">
        <div className="splide__track">
          <SlidesList slides={slides} />
        </div>
        <div className="splide__arrows">
          <button className={`splide__arrow splide__arrow--prev ${styles.arrowPrev}`}>←</button>
          <button className={`splide__arrow splide__arrow--next ${styles.arrowNext}`}>→</button>
        </div>
      </section>

    </div>
  )
}