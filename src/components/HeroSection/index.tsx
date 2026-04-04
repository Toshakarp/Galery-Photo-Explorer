import React from 'react';
import styles from './Hero.module.scss';
import SearchBar from 'components/SearchBar';

interface HeroProps {
  showSearch?: boolean;
}

const Hero: React.FC<HeroProps> = ({ showSearch }) => {
  return (
    <section className={styles.hero}>
      <h1 className={`${styles.title} ${showSearch ? styles.small : ''}`}>
        Let's Find Some <span>Images</span> Here!
      </h1>

      {showSearch && (
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
      )}
    </section>
  );
};

export default Hero;
