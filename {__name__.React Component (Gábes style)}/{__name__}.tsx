import React from 'react';

import styles from './{__name__}.module.css';
import { {__name__}Props } from './{__name__}.types';

const {__name__}: React.FC<{__name__}Props> = ({ children }) => {
  return (
    <div className={styles.{__name__}}>
      { children }
    </div >
  );
}

export default {__name__};