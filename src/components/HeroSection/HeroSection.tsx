import React from 'react';
import styles from './HeroSection.module.scss';
import SearchBar from 'components/SearchBar/SearchBar';

interface HeroProps {
  showSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearchSubmit?: () => void;
}

const Hero: React.FC<HeroProps> = ({ showSearch, searchValue = '', onSearchChange, onSearchSubmit }) => {
  return (
    <section className={styles.hero}>
      <h1 className={`${styles.title} ${showSearch ? styles.small : ''}`}>
        Let's Find Some <span>Images</span> Here!
      </h1>

      {showSearch && (
        <div className={styles.searchContainer}>
          <SearchBar value={searchValue} onChange={onSearchChange || (() => {})} onSubmit={onSearchSubmit || (() => {})} />
        </div>
      )}
    </section>
  );
};

export default Hero;
