import Link from 'next/link';
import styles from './Header.module.css';
import Image from "next/image";

export default function Header() {
  return (
  <header id={`${styles.header}`}>
    <div className='wrapper'>
      <nav className={`${styles.mainNav}`}>
        <Link className={styles.link} href='/'>
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
        </Link>
        <ul className={`${styles.navList}`}>
          <li className={`${styles.navElem}`}><Link className={styles.link} href='/'>Головна</Link></li>
          <li className={`${styles.navElem}`}><Link className={styles.link} href='/'>Служіння</Link></li>
          {/* <li className={`${styles.navElem}`}>Новини</li> */}
          <li className={`${styles.navElem}`}><Link className={styles.link} href='/'>Галерея</Link></li>
          <li className={`${styles.navElem}`}><Link className={styles.link} href='/'>Контакти</Link></li>
          <li className={`${styles.navElem}`}><Link className={styles.link} href='/'>Про нас</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  );
}
