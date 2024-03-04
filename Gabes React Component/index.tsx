import React from 'react';

import { [FTName]Props } from './interfaces';

const [FTName]: React.FC<[FTName]Props> = ({ children }) => {
  return (
    <>
      { children }
    </>
  );
}

export default [FTName];