import React from 'react';
import styled from 'styled-components';
import Hyphenated from 'react-hyphen';
import AOS from 'aos';
import pl from 'hyphenated-pl';
import PropTypes from 'prop-types';
import styles from './Chapter.module.scss';
import 'aos/dist/aos.css';

const Picture = styled.picture`
  padding: 20px;
  margin-left: auto;
  margin-right: 30px;
`;

function Chapter({ title, description, subtitle, src, srcSet }) {
  AOS.init();

  return (
    <>
      <h1 className={styles.title}>{title} </h1>
      <div className={styles.underline}></div>
      <p className={`${styles.subtitle}`}>{subtitle} </p>
      <Hyphenated language={pl}>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description} </p>
          {src && (
            <Picture>
              <source type="image/avif" srcSet={srcSet} />
              <img src={src} alt="myself" className={styles.image} />
            </Picture>
          )}
        </div>
      </Hyphenated>
    </>
  );
}

Chapter.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
};

export default Chapter;
