import React, { useState } from 'react';
import styles from './ImageCard.module.scss';
import BookmarkButton from 'components/BookmarkButton/';

interface ImageCardProps {
  id: string;
  imageUrl: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, imageUrl, title }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);

    // по id в localStorage
    // toggleBookmarkInStorage(id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ background: `url(${imageUrl}) lightgray 50% / cover no-repeat, #D9D9D9` }} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <BookmarkButton isActive={isBookmarked} onClick={handleBookmarkClick} className={styles.bookmarkBtn} />
      </div>
    </div>
  );
};

export default ImageCard;
