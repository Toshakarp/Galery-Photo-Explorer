import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '@assets/images/logo.svg';
import { ReactComponent as BurgerIcon } from '@assets/images/icons/burgerMenu.svg';
import { ReactComponent as CategoryIcon } from '@assets/images/icons/category.svg';
import { ReactComponent as ImagesIcon } from '@assets/images/icons/images.svg';
import { ReactComponent as FavIcon } from '@assets/images/icons/fav.svg';
import { ReactComponent as TwitterIcon } from '@assets/images/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from '@assets/images/icons/facebook.svg';
import { ReactComponent as InstaIcon } from '@assets/images/icons/insta.svg';
import { ReactComponent as GithubIcon } from '@assets/images/icons/github.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.burgerBtn} onClick={toggleMenu}>
          <BurgerIcon />
        </button>

        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <Logo width="287" height="49" />
        </NavLink>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} onClick={closeMenu}>
                <CategoryIcon className={styles.icon} />
                <span>Category</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/images" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} onClick={closeMenu}>
                <ImagesIcon className={styles.icon} />
                <span>Images</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/favourites" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} onClick={closeMenu}>
                <FavIcon className={styles.icon} />
                <span>Favourites</span>
              </NavLink>
            </li>
          </ul>
          <div className={styles.socials}>
            <a href="https://x.com/modsencompany">
              <TwitterIcon />
            </a>
            <a href="https://www.facebook.com/ModsenSoftware/">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/modsencompany/">
              <InstaIcon />
            </a>
            <a href="https://github.com/Toshakarp/galery-test-task/tree/main">
              <GithubIcon />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
