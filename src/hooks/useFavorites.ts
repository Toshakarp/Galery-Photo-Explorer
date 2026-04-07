import { useState, useEffect } from 'react';
import { IImage } from 'api/types';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<IImage[]>([]);

  // Загружаем при монтировании
  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const toggleFavorite = (image: IImage) => {
    const isExist = favorites.some((fav) => fav.id === image.id);
    let updatedFavorites;

    if (isExist) {
      updatedFavorites = favorites.filter((fav) => fav.id !== image.id);
    } else {
      updatedFavorites = [...favorites, image];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (id: string) => favorites.some((fav) => fav.id === id);

  return { favorites, toggleFavorite, isFavorite };
};
