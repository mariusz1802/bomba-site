import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './Head.module.scss';
import Flag from '../Navbar/Flag/Flag';
import BombaLogo from '../../components/BombaLogo/BombaLogo';
import ToggleButton from '../../components/ToggleButton/ToggleButton';

const BombaWrapper = styled.div`
  padding-top: 100px;
`;
function Head({ theme, toggleTheme }) {
  return (
    <>
      <div id="home" className={styles.container}>
        <BombaWrapper>
          <BombaLogo />
        </BombaWrapper>
        <ToggleButton on theme={theme} toggleTheme={toggleTheme} />
        <div className={styles.flag}>
          <Flag />
        </div>
      </div>
    </>
  );
}

Head.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
};

export default Head;
