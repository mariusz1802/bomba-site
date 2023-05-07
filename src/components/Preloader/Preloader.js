import React, { Suspense } from 'react';
import LoadingScreen from 'react-loading-screen';
import PropTypes from 'prop-types';
import LogoAvif from '../../assets/images/bomba_small.avif';

function Preloader({ children }) {
  return (
    <Suspense
      fallback={
        <LoadingScreen
          loading={true}
          bgColor="#555555"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc={LogoAvif}
        />
      }
    >
      {children}
    </Suspense>
  );
}

Preloader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Preloader;
