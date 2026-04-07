import React from 'react';
import styles from './ImageCard.module.scss';
import BookmarkButton from 'components/BookmarkButton/';

interface ImageCardProps {
  id: string;
  imageUrl: string;
  title: string;
  isActive: boolean;
  onBookmarkClick: () => void;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, isActive, onBookmarkClick, onClick }) => {
  const imageStyle: React.CSSProperties = {
    backgroundImage: `url("${imageUrl}")`,
    backgroundColor: '#D9D9D9',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={styles.card}>
      <div className={styles.image} style={imageStyle} onClick={onClick} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <BookmarkButton isActive={isActive} onClick={onBookmarkClick} className={styles.bookmarkBtn} />
      </div>
    </div>
  );
};

export default ImageCard;
