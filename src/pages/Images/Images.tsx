import React, { useState, useEffect } from 'react';
import styles from './Images.module.scss';
import Hero from 'components/HeroSection';

import Gallery from 'components/Gallery';
import useDebounce from 'hooks/useDebounce';
import { searchImagesRequest } from 'api/unsplash';
import { IImage } from 'api/types';

const Images: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState<IImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(searchQuery, 500);

  const fetchImages = async (query: string) => {
    if (!query) return;

    setIsLoading(true);
    setError(null);
    try {
      const response = await searchImagesRequest(query);
      setImages(response.results);
    } catch (err) {
      setError('Failed to load images');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(debouncedQuery);
  }, [debouncedQuery]);

  const handleSearchSubmit = () => {
    fetchImages(searchQuery);
  };

  return (
    <div className={styles.container}>
      <Hero showSearch={true} searchValue={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={handleSearchSubmit} />
      <div className={styles.error}>{error}</div>
      <div className={styles.content}>
        <Gallery images={images} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Images;
