import React from 'react';
import styles from './BookmarkButton.module.scss';
import { ReactComponent as BookmarkIcon } from 'assets/images/icons/bookmark.svg';

interface BookmarkButtonProps {
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ isActive, onClick, className }) => {
  return (
    <button className={`${styles.button} ${isActive ? styles.active : ''} ${className || ''}`} onClick={onClick} aria-label="add to favorites">
      <BookmarkIcon />
    </button>
  );
};

export default BookmarkButton;
