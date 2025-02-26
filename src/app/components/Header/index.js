import Image from "next/image";

export default function Header() {
  return (
  <header id="header">
    <div className="nav-wrapper">
      <nav className="main-nav">
        <div className="nav-logo">
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
          <div className="logo-text">
            <p>Християнська церква &quot;Перемога&quot;</p>
            <p>м. Запоріжжя</p>
          </div>
        </div>
        <ul className="nav-list">
          <li className="nav-elem">Головна</li>
          <li className="nav-elem">Служіння</li>
          <li className="nav-elem">Новини</li>
          <li className="nav-elem">Галерея</li>
          <li className="nav-elem">Контакти</li>
          <li className="nav-elem">Про нас</li>
        </ul>
      </nav>
    </div>
  </header>
  );
}
