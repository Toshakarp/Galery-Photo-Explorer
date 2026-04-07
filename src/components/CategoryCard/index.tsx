import React from 'react';
import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl, onClick }) => {
  const imageStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.70) 100%), url("${imageUrl}")`,
    backgroundColor: '#D9D9D9',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.image} style={imageStyle}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
