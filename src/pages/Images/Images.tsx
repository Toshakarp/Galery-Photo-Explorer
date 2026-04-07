import React, { useEffect } from 'react';
import styles from './Images.module.scss';
import Hero from 'components/HeroSection/HeroSection';
import SortBy from 'components/SortByButton/SortByButton';
import Gallery from 'components/Gallery/Gallery';
import Pagination from 'components/Pagination/Pagination';
import ImageModal from 'components/ImageModal/ImageModal';
import { useLocation } from 'react-router-dom';
import { useImageGallery } from 'hooks/useImageGallery';
import { useImageModal } from 'hooks/useImageModal';
import { useFavorites } from 'hooks/useFavorites';

const Images: React.FC = () => {
  const location = useLocation();
  const categoryQuery = location.state?.query || '';

  const {
    searchQuery,
    setSearchQuery,
    handleSearchSubmit,
    debouncedQuery,
    images,
    isLoading,
    error,
    orderBy,
    setOrderBy,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useImageGallery(categoryQuery);

  const { isOpen, currentIndex, openModal, closeModal, handleNext, handlePrev } = useImageModal(images.length);

  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (categoryQuery) {
      setSearchQuery(categoryQuery);
    }
  }, [categoryQuery, setSearchQuery]);

  return (
    <div className={styles.container}>
      <Hero showSearch={true} searchValue={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={handleSearchSubmit} />

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.content}>
        {debouncedQuery.trim() && <SortBy currentSort={orderBy} onChange={setOrderBy} />}

        <Gallery images={images} isLoading={isLoading} onImageClick={openModal} isFavorite={isFavorite} onToggleFavorite={toggleFavorite} />

        {isOpen && (
          <ImageModal
            images={images}
            currentIndex={currentIndex}
            onClose={closeModal}
            onNext={handleNext}
            onPrev={handlePrev}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {images.length > 0 && debouncedQuery.trim() && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
      </div>
    </div>
  );
};

export default Images;
