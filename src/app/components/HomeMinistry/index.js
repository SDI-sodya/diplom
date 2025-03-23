"use client";
import { useEffect, useState } from 'react';
import styles from './HomeMinistry.module.css';
import Image from 'next/image';

export default function HomeMinistry() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/data/ministry.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCards(data))
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);
  

  return(
  <div className='wrapper'>
    <div className={styles.ministryContainer}>
      <h2 className='title'>Служіння</h2>
      <div className={styles.cardsContainer}>
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <div key={index} className={styles.ministryCard}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="100vw"
                />
                <span className="moreInfoLink">More Info</span>
              </div>
              <p className={styles.cardName}>{card.title}</p>
            </div>
          ))
        ) : (
          <p>Завантаження...</p>
        )}
      </div>
    </div>
  </div>
  )
}