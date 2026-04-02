import React from 'react';
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
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.burgerBtn}>
          <BurgerIcon />
        </button>

        <NavLink to="/" className={styles.logo}>
          <Logo width="287" height="49" />
        </NavLink>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/" className={styles.link}>
                <CategoryIcon className={styles.icon} />
                <span>Category</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/images" className={styles.link}>
                <ImagesIcon className={styles.icon} />
                <span>Images</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/favourites" className={styles.link}>
                <FavIcon className={styles.icon} />
                <span>Favourites</span>
              </NavLink>
            </li>
          </ul>
          <div className={styles.socials}>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <InstaIcon />
            </a>
            <a href="#">
              <GithubIcon />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
