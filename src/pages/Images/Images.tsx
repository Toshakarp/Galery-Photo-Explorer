import React from 'react';
import styles from './Images.module.scss';
import Hero from 'components/HeroSection';

const Images: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero showSearch={true} />
    </div>
  );
};

export default Images;
