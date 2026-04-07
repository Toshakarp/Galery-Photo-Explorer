import { useState, useEffect } from 'react';
import { ICategory } from 'api/types';
import { searchImagesRequest } from 'api/unsplash';

const CATEGORY_NAMES = ['Art', 'Cars', 'Architecture', 'Food', 'Religion', 'Clothes', 'Technologies', 'Music', 'Business', 'Sport', 'Social', 'Sky'];

export const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const results = await Promise.all(
          CATEGORY_NAMES.map(async (title) => {
            const response = await searchImagesRequest(title, 1, 'relevant');
            return {
              title,
              coverUrl: response.results[0]?.urls.regular || '',
            };
          })
        );
        setCategories(results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, isLoading };
};
