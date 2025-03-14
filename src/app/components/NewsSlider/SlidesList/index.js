import Image from 'next/image';
import styles from "../NewsSlider.module.css"

export default function SlidesList({ slides }) {
  return (
    <ul className="splide__list">
      {slides.map((slide, index) => (
        <li key={index} className='splide__slide'>
          <div className='splide__slide__container'>
            <Image
              className={`${styles.image}`}
              src={slide.imageSrc}
              alt={slide.imageAlt}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <p>{slide.text}</p>
        </li>
      ))}
    </ul>
  );
}
