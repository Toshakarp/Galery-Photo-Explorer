import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CategoryList.module.scss';
import CategoryCard from 'components/CategoryCard/CategoryCard';
import { ICategory } from 'api/types';

interface CategoryListProps {
  categories: ICategory[];
  isLoading: boolean;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, isLoading }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (title: string) => {
    navigate('/images', { state: { query: title } });
  };

  if (isLoading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  return (
    <div className={styles.list}>
      {categories.map((category) => (
        <CategoryCard key={category.title} title={category.title} imageUrl={category.coverUrl} onClick={() => handleCategoryClick(category.title)} />
      ))}
    </div>
  );
};

export default CategoryList;
