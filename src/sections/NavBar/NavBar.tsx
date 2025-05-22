import styles from "./NavBar.module.css";
import { NavBarData } from "../../dataContent/Data";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={styles.navBar}>
      <img src="/logo.svg" alt="Logo" className={styles.logo} />
      <div className={styles.navList}>
        {NavBarData.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <button className={styles.loginBtn}>login</button>
      <button className={styles.mobileMenu}>
        <img src="/icons/menu.svg" alt="menu_btn" onClick={toggleMenu} />
      </button>
      {isMenuOpen && (
        <div className={styles.mobile_menu_overlay}>
          <div className={styles.mobile_menu}>
            <div className={styles.menu_header}>
              <img src="/logo.svg" alt="Logo" className={styles.logo} />
              <img
                src="/icons/close.svg"
                alt="close menu"
                className={styles.close_icon}
                onClick={toggleMenu}
              />
            </div>
            <div className={styles.menu_list}>
              {NavBarData.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={({ isActive }) =>
                    `${styles.nav_Item} ${isActive ? styles.active : ""}`
                  }
                    onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <button className={styles.loginMobile}>login</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
