import React from 'react';
import styles from './Images.module.scss';
import Hero from 'components/HeroSection';
import SortBy from 'components/SortByButton';
import Gallery from 'components/Gallery';
import Pagination from 'components/Pagination';
import ImageModal from 'components/ImageModal';
import { useImageGallery } from 'hooks/useImageGallery';
import { useImageModal } from 'hooks/useImageModal';

const Images: React.FC = () => {
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
  } = useImageGallery();

  const { isOpen, currentIndex, openModal, closeModal, handleNext, handlePrev } = useImageModal(images.length);

  return (
    <div className={styles.container}>
      <Hero showSearch={true} searchValue={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={handleSearchSubmit} />

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.content}>
        {debouncedQuery.trim() && <SortBy currentSort={orderBy} onChange={setOrderBy} />}

        <Gallery images={images} isLoading={isLoading} onImageClick={openModal} />

        {isOpen && <ImageModal images={images} currentIndex={currentIndex} onClose={closeModal} onNext={handleNext} onPrev={handlePrev} />}

        {images.length > 0 && debouncedQuery.trim() && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
      </div>
    </div>
  );
};

export default Images;
