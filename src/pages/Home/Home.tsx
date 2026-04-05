import React from 'react';
import styles from './Home.module.scss';
import Hero from 'components/HeroSection';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Home;
