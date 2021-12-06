import React from "react";
import styles from "./Input.module.scss";
import PropTypes from "prop-types";
import styled from "styled-components";
function Input({
  type,
  name,
  onChange,
  placeholder,
  value,
  autoComplete,
  maxLength,
  ownClass,
  validations,
  required,
}) {
  const Input = styled.div`
    color: ${({ theme }) => theme.text};
    & input {
      color: ${({ theme }) => theme.text};
    }
  `;

  const FormInput = styled.div`
    & input {
      width: 100%;
      height: 100%;
      color: rgb(94, 97, 252);
      padding-top: 18px;
      padding-left: 8px;
      border: none;
      font-size: 18px;
      font-weight: 500;
      outline: none;
      background-color: red;
    }
  `;

  return (
    <div className={styles.form}>
        <input
          type={type}
          name={name}
          className={`${styles.form} ${ownClass}`}
          id={name}
          value={value}
          validations={validations}
          maxLength={maxLength}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
        ></input>
      <label htmlFor="name" className={styles.labelName}>
        <span className={styles.contentName}>{placeholder}</span>
      </label>
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.any.isRequired,
};

Input.defaultProps = {
  type: "text",
  name: "input",
  maxLength: 200,
  label: "labelName",
};

export default Input;
