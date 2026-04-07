import React, { useState } from 'react';
import styles from './ImageCard.module.scss';
import BookmarkButton from 'components/BookmarkButton/';

interface ImageCardProps {
  id: string;
  imageUrl: string;
  title: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, imageUrl, title, onClick }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);

    // по id в localStorage
    // toggleBookmarkInStorage(id);
  };

  const imageStyle: React.CSSProperties = {
    backgroundImage: `url("${imageUrl}")`, // Добавили кавычки внутри url
    backgroundColor: '#D9D9D9', // Цвет-заглушка (как в твоем коде)
    backgroundSize: 'cover', // Масштабирование
    backgroundPosition: 'center', // Центрирование
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={styles.card}>
      <div className={styles.image} style={imageStyle} onClick={onClick} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <BookmarkButton isActive={isBookmarked} onClick={handleBookmarkClick} className={styles.bookmarkBtn} />
      </div>
    </div>
  );
};

export default ImageCard;
