import React from 'react';
import styles from './Home.module.scss';
import Hero from 'components/HeroSection/HeroSection';
import CategoryList from 'components/CategoryList/CategoryList';
import { useCategories } from 'hooks/useCategories';

const Home: React.FC = () => {
  const { categories, isLoading } = useCategories();

  return (
    <div className={styles.container}>
      <Hero />
      <CategoryList categories={categories} isLoading={isLoading} />
    </div>
  );
};

export default Home;
