import React from 'react';
import styles from './SearchBar.module.scss';
import SearchIcon from 'assets/images/icons/search.svg?react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <button type="submit" aria-label="Search">
        <SearchIcon className={styles.icon} />
      </button>
      <input type="text" className={styles.input} placeholder="Search" value={value} onChange={(e) => onChange(e.target.value)} />
    </form>
  );
};

export default SearchBar;
