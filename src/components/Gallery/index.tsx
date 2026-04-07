import React from 'react';
import styles from './Gallery.module.scss';
import ImageCard from 'components/ImageCard';
import { IImage } from 'api/types';

interface GalleryProps {
  images: IImage[];
  isLoading: boolean;
  onImageClick: (index: number) => void;
}

const Gallery: React.FC<GalleryProps> = ({ images, isLoading, onImageClick }) => {
  if (isLoading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (!images.length) {
    return (
      <div className={styles.empty}>
        The search didn't yield any results, please try <span>again</span>.
      </div>
    );
  }

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <ImageCard
          key={image.id}
          id={image.id}
          imageUrl={image.urls.regular}
          title={image.alt_description || 'Untitled Image'}
          onClick={() => onImageClick(index)}
        />
      ))}
    </div>
  );
};

export default Gallery;
