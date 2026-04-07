import React from 'react';
import styles from './Pagination.module.scss';
import { ReactComponent as Arrow } from 'assets/images/icons/paginationArrow.svg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 3);

  if (endPage - startPage < 3 && totalPages >= 4) {
    startPage = Math.max(1, endPage - 3);
  }

  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <div className={styles.paginationContainer}>
      {visiblePages.map((pageNumber) => (
        <button key={pageNumber} className={`${styles.pageButton} ${currentPage === pageNumber ? styles.active : ''}`} onClick={() => onPageChange(pageNumber)}>
          {pageNumber}
        </button>
      ))}

      {currentPage < totalPages && (
        <button className={styles.nextButton} onClick={() => onPageChange(currentPage + 1)}>
          <Arrow />
        </button>
      )}
    </div>
  );
};

export default Pagination;
