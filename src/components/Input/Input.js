import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

function Input({
  type,
  name,
  onChange,
  placeholder,
  value,
  maxLength,
  ownClass,
  required,
}) {
  return (
    <div className={styles.form}>
      <input
        autoComplete="off"
        type={type}
        name={name}
        className={`${styles.form} ${ownClass}`}
        id={name}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        required={required}
      ></input>
      <label htmlFor="name" className={styles.labelName}>
        <span className={styles.contentName}>
          {placeholder} {required && <i>*</i>}{' '}
        </span>
      </label>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ownClass: PropTypes.string,
  validations: PropTypes.array,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  name: 'input',
  maxLength: 200,
  label: 'labelName',
};

export default Input;
