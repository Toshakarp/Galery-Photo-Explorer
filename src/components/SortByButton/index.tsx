import React, { useState } from 'react';
import styles from './SortBy.module.scss';
import ArrowIcon from 'assets/images/icons/arrow.svg?react';

export type SortOption = 'relevant' | 'latest';

interface SortByButtonProps {
  currentSort: string;
  onChange: (sort: string) => void;
}

const SortBy: React.FC<SortByButtonProps> = ({ currentSort, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };

  const handleSelect = (option: SortOption) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Sort by</span>

      <div className={styles.container} onBlur={handleBlur} tabIndex={0}>
        <button className={styles.button} onClick={() => setIsOpen(!isOpen)} type="button">
          <span className={styles.currentValue}>{currentSort}</span>
          <ArrowIcon className={`${styles.icon} ${isOpen ? styles.rotated : ''}`} />
        </button>

        {isOpen && (
          <ul className={styles.dropdown}>
            <li className={`${styles.option} ${currentSort === 'relevant' ? styles.active : ''}`} onMouseDown={() => handleSelect('relevant')}>
              Relevant
            </li>
            <li className={`${styles.option} ${currentSort === 'latest' ? styles.active : ''}`} onMouseDown={() => handleSelect('latest')}>
              Latest
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortBy;
