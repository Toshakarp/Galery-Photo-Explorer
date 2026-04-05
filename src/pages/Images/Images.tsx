import React, { useState, useEffect, useCallback } from 'react';
import styles from './Images.module.scss';
import Hero from 'components/HeroSection';
import SortBy from 'components/SortByButton';
import Gallery from 'components/Gallery';
import useDebounce from 'hooks/useDebounce';
import { searchImagesRequest, getRandomImagesRequest } from 'api/unsplash';
import { IImage } from 'api/types';

const Images: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState<IImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [orderBy, setOrderBy] = useState('relevant');

  const debouncedQuery = useDebounce(searchQuery, 500);

  const fetchImages = useCallback(async (query: string, sort: string) => {
    setIsLoading(true);
    setError(null);
    try {
      if (query.trim()) {
        const response = await searchImagesRequest(query, 1, sort);
        setImages(response.results);
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
    fetchImages(debouncedQuery, orderBy);
  }, [debouncedQuery, orderBy]);

  const handleSearchSubmit = () => {
    fetchImages(searchQuery, orderBy);
  };

  return (
    <div className={styles.container}>
      <Hero showSearch={true} searchValue={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={handleSearchSubmit} />
      <div className={styles.error}>{error}</div>
      <div className={styles.content}>
        {debouncedQuery.trim() && (
          <div className={styles.sortWrapper}>
            <SortBy currentSort={orderBy} onChange={setOrderBy} />
          </div>
        )}
        <Gallery images={images} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Images;
