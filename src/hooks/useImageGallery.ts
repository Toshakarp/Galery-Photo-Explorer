import { useState, useEffect, useCallback } from 'react';
import { IImage } from 'api/types';
import { searchImagesRequest, getRandomImagesRequest } from 'api/unsplash';
import useDebounce from 'hooks/useDebounce';

export const useImageGallery = (initialQuery: string = '') => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
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
        setTotalPages(1);
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

  return {
    searchQuery,
    setSearchQuery,
    images,
    isLoading,
    error,
    orderBy,
    setOrderBy,
    currentPage,
    setCurrentPage,
    totalPages,
    debouncedQuery,
    handleSearchSubmit,
  };
};
