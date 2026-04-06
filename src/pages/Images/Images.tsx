import React, { useState, useEffect, useCallback } from 'react';
import styles from './Images.module.scss';
import Hero from 'components/HeroSection';
import SortBy from 'components/SortByButton';
import Gallery from 'components/Gallery';
import useDebounce from 'hooks/useDebounce';
import Pagination from 'components/Pagination';
import { searchImagesRequest, getRandomImagesRequest } from 'api/unsplash';
import { IImage } from 'api/types';

const Images: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState<IImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [orderBy, setOrderBy] = useState('relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const debouncedQuery = useDebounce(searchQuery, 500);

  const fetchImages = useCallback(async (query: string, sort: string, page: number) => {
    setIsLoading(true);
    setError(null);
    try {
      if (query.trim()) {
        const response = await searchImagesRequest(query, page, sort);
        setImages(response.results);
        setTotalPages(response.total_pages);
      } else {
        const data = await getRandomImagesRequest();
        setImages(data);
      }
    } catch (err) {
      setError('Failed to load images');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedQuery, orderBy]);

  useEffect(() => {
    fetchImages(debouncedQuery, orderBy, currentPage);
  }, [debouncedQuery, orderBy, currentPage]);

  const handleSearchSubmit = () => {
    setCurrentPage(1);
    fetchImages(searchQuery, orderBy, 1);
  };

  return (
    <div className={styles.container}>
      <Hero showSearch={true} searchValue={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={handleSearchSubmit} />
      <div className={styles.error}>{error}</div>
      <div className={styles.content}>
        {debouncedQuery.trim() && <SortBy currentSort={orderBy} onChange={setOrderBy} />}
        <Gallery images={images} isLoading={isLoading} />

        {images.length > 0 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
      </div>
    </div>
  );
};

export default Images;
