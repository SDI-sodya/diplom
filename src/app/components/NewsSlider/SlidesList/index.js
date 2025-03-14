import Image from 'next/image';
import styles from "./SliderList.module.css"

export default function SlidesList({ slides }) {
  return (
    <ul className="splide__list">
      {slides.map((slide, index) => (
        <li key={index} className={`splide__slide ${styles.slide}`}>
          <div className='splide__slide__container'>
            <div className={`${styles.imageContainer}`}>
              <Image
                className={`${styles.image}`}
                src={slide.imageSrc}
                alt={slide.imageAlt}
                fill
                sizes="100vw"
              />
            </div>
          </div>
          <h3 className={`${styles.slideTitle}`}>{slide.title}</h3>
          <p className={`${styles.slideText}`}>{slide.text}</p>
        </li>
      ))}
    </ul>
  );
}
