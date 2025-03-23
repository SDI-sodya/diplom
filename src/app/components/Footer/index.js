import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='wrapper'>
        <div className={styles.navWrapper}>
          <div className={`${styles.logo}`}>
            <Image
            src="/images/main_logo_w.png"
            alt="Logo"
            // fill={true}
            sizes="100px"
            style={{
              marginRight: '1em',
              height: '100%'
            }}
            width={100}
            height={100}
            />
            <div className={`${styles.logoText}`}>
              <p>Християнська церква &quot;Перемога&quot;</p>
              <p>м. Запоріжжя</p>
            </div>
          </div>
          <div className={styles.navListWrapper}>
            <ul className={`${styles.navList}`}>
              <li className={`${styles.navElem}`}><Link className={styles.link} href='/'>Головна</Link></li>
              <li className={`${styles.navElem}`}><Link className={styles.link} href='/'>Служіння</Link></li>
              {/* <li className={`${styles.navElem}`}>Новини</li> */}
              <li className={`${styles.navElem}`}><Link className={styles.link} href='/'>Галерея</Link></li>
              <li className={`${styles.navElem}`}><Link className={styles.link} href='/'>Контакти</Link></li>
              <li className={`${styles.navElem}`}><Link className={styles.link} href='/'>Про нас</Link></li>
            </ul>
          </div>
        </div>
        <p className={styles.copy}>© 2025 Все права защищены</p>
      </div>
    </footer>
  );
}
