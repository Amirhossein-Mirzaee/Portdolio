import { useState } from "react";
import "./header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header max-w-[2000px] mx-auto">
      <nav className="nav px-6">
        <a href="index.html" className="nav__logo">
          Amirhossein Mirzaee
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            {[
              { href: "#home", label: "Home", icon: "uil-estate" },
              { href: "#about", label: "About", icon: "uil-user" },
              { href: "#skills", label: "Skills", icon: "uil-file-alt" },
              { href: "#project", label: "Projects", icon: "uil-briefcase-alt" },
              { href: "#qualification", label: "Experience", icon: "uil-scenery" },
              { href: "#contact", label: "Contact", icon: "uil-message" },
            ].map(({ href, label, icon }) => (
              <li className="nav__item" key={href}>
                <a
                  href={href}
                  onClick={() => { setActiveNav(href); setToggle(false); }}
                  className={activeNav === href ? "nav__link active-link" : "nav__link"}
                >
                  <i className={`uil ${icon} nav__icon`}></i>{label}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close" onClick={() => setToggle(false)}></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
