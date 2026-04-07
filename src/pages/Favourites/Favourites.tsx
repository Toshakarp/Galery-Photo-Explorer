import React from 'react';
import styles from './Favourites.module.scss';
import Gallery from 'components/Gallery';
import ImageModal from 'components/ImageModal';
import { useFavorites } from 'hooks/useFavorites';
import { useImageModal } from 'hooks/useImageModal';

const Favourites: React.FC = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { isOpen, currentIndex, openModal, closeModal, handleNext, handlePrev } = useImageModal(favorites.length);

  return (
    <div className={styles.container}>
      {favorites.length > 0 && (
        <h1 className={styles.title}>
          Saved by you <span>Your favorites list</span>
        </h1>
      )}

      <main className={styles.content}>
        <Gallery
          images={favorites}
          isLoading={false}
          onImageClick={openModal}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          emptyMessage={
            <>
              Your <span>Favorites</span> List Is Empty
            </>
          }
        />
      </main>

      {isOpen && (
        <ImageModal
          images={favorites}
          currentIndex={currentIndex}
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrev}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default Favourites;
