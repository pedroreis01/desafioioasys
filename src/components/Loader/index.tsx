import React from 'react';

import ClipLoader from 'react-spinners/ClipLoader';
import { StyledLoader } from './style';

const Loader: React.FC = () => {
  return (
        <StyledLoader>
            <ClipLoader color="#B22E6F" loading size={100} />
        </StyledLoader>
  );
};

export default Loader;
