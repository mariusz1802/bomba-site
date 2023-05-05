import React from 'react';
import styles from './Counter.module.scss';
import PropTypes from 'prop-types';

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function Counter({ price }) {
  return <div className={styles.price}> {numberWithSpaces(price)}zł</div>;
}

Counter.propTypes = {
  price: PropTypes.string,
};

export default Counter;
