import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import styles from './FormErrors.module.scss';

export const FormErrors = ({ formErrors }) => (
  <div className={styles.formErrors}>
    <div className={styles.textErrors}>
      {formErrors && (
        <p className={styles.textErrors}>
          <FadeIn>{formErrors}</FadeIn>
        </p>
      )}
    </div>
  </div>
);

FormErrors.propTypes = {
  formErrors: PropTypes.string,
};
