import styles from './Header.module.css';
import Image from "next/image";

export default function Header() {
  return (
  <header id={`${styles.header}`}>
    <div className={`${styles.navWrapper}`}>
      <nav className={`${styles.mainNav}`}>
        <div className={`${styles.navLogo}`}>
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
        <ul className={`${styles.navList}`}>
          <li className={`${styles.navElem}`}>Головна</li>
          <li className={`${styles.navElem}`}>Служіння</li>
          {/* <li className={`${styles.navElem}`}>Новини</li> */}
          <li className={`${styles.navElem}`}>Галерея</li>
          <li className={`${styles.navElem}`}>Контакти</li>
          <li className={`${styles.navElem}`}>Про нас</li>
        </ul>
      </nav>
    </div>
  </header>
  );
}
