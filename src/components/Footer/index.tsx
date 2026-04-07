/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/images/icons/logo.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/icons/facebook.svg';
import { ReactComponent as InstaIcon } from 'assets/images/icons/insta.svg';
import { ReactComponent as GithubIcon } from 'assets/images/icons/github.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              <Logo width="287" height="49" />
            </a>
            <p className={styles.description}>
              We have images that capture every mood and inspire every vision. From breathtaking landscapes to vibrant portraits.
            </p>
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
          </div>
          <div className={styles.linksBlock}>
            <div className={styles.column}>
              <h4 className={styles.title}>COMPANY</h4>
              <ul className={styles.list}>
                <li>
                  <a href="#" className={styles.link}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.title}>HELP</h4>
              <ul className={styles.list}>
                <li>
                  <a href="#" className={styles.link}>
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.title}>FAQ</h4>
              <ul className={styles.list}>
                <li>
                  <a href="#" className={styles.link}>
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.title}>RESOURCES</h4>
              <ul className={styles.list}>
                <li>
                  <a href="#" className={styles.link}>
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>Modsen.gallery © 2000-2025, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
