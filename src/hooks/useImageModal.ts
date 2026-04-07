import { useState, useCallback } from 'react';

export const useImageModal = (totalImages: number) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overscrollBehavior = 'contain';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overscrollBehavior = 'auto';
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  return {
    isOpen,
    currentIndex,
    openModal,
    closeModal,
    handleNext,
    handlePrev,
  };
};
