import React from 'react';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>
          404 <br />
          <span className={styles.errorSub}>NOT FOUND</span>
        </h1>

        <p className={styles.message}>
          The Page Was <span>Not Found</span>, Please <br />
          Return To The Main Page.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
