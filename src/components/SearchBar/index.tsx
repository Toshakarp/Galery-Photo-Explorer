import React from 'react';
import styles from './SearchBar.module.scss';
import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <SearchIcon className={styles.icon} />
      <input type="text" className={styles.input} placeholder="Search" />
    </div>
  );
};

export default SearchBar;
