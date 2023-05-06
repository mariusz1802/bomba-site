import React from 'react';
import styles from './CheckAnimation.module.scss';
import FancyButton from '../../../FancyButton/FancyButton';
import BombaLogo from '../../../BombaLogo/BombaLogo';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function CheckAnimation({ onClose }) {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.wrapper}>
        <BombaLogo mobile fontSize="sm" subText="sm" lineHeight="low" />

        <div className={styles.successCheckmark}>
          <div className={styles.checkIcon}>
            <span className={`${styles.iconLine} ${styles.lineTip}`}></span>
            <span className={`${styles.iconLine} ${styles.lineLong}`}></span>
            <div className={styles.iconCircle}></div>
            <div className={styles.iconFix}></div>
          </div>
        </div>
        <center>
          <div className={styles.info}>{t('sendDataInfo.send')}</div>
          <div className={styles.info}>{t('sendDataInfo.thank')}</div>
          <div className={styles.details}>{t('sendDataInfo.contact')}</div>
        </center>
      </div>
      <FancyButton text={t('sendDataInfo.btnClose')} onClick={onClose} />
    </>
  );
}

CheckAnimation.propTypes = {
  onClose: PropTypes.func,
};

export default CheckAnimation;
