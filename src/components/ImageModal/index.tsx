import React from 'react';
import styles from './ImageModal.module.scss';
import BookmarkButton from 'components/BookmarkButton';
import { ReactComponent as CancelCross } from 'assets/images/icons/CancelCross.svg';
import { ReactComponent as ArrowNext } from 'assets/images/icons/arrowNext.svg';
import { IImage } from 'api/types';

interface ImageModalProps {
  images: IImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (image: IImage) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose, onNext, onPrev, isFavorite, onToggleFavorite }) => {
  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          <CancelCross />
        </button>

        <div className={styles.carouselContainer}>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={onPrev}>
            <ArrowNext />
          </button>

          <div className={styles.imageCard}>
            <img src={currentImage.urls.regular} alt={currentImage.alt_description || 'Image'} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.title}>{currentImage.alt_description || 'Untitled'}</h3>
              <BookmarkButton isActive={isFavorite(currentImage.id)} onClick={() => onToggleFavorite(currentImage)} />
            </div>
          </div>

          <button className={styles.arrow} onClick={onNext}>
            <ArrowNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
