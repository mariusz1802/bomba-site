import React from 'react';
import ReactDOM from 'react-dom';
import FancyButton from '../FancyButton/FancyButton';
import { useTranslation } from 'react-i18next';
import useFade from '../../hooks/useFade/useFade';
import Prices from './Prices';
import SendData from './Elements/SendData';
import ModalBox from '../ModalBox/ModalBox';

function ModalBoxPrices({
  type,
  action,
  onClose,
  price,
  setPrice,
  modalName,
  onChange,
}) {
  const { t } = useTranslation();

  const [data, setData, fadeProps] = useFade(true);
  const sendData = () => {
    setData(!data);
  };

  const createDetails = (price, type) => {
    const element = {
      cena: price,
      type: type,
    };
    return JSON.stringify(element);
  };

  return ReactDOM.createPortal(
    <ModalBox onClose={onClose}>
      {data ? (
        <div {...fadeProps}>
          <Prices
            type={type}
            setPrice={setPrice}
            price={price}
            action={action}
            onChange={onChange}
            modalName={modalName}
          />
          <FancyButton text={t('intresstedButton.text')} onClick={sendData} />
        </div>
      ) : (
        <SendData
          backButton={sendData}
          onClose={onClose}
          orderDetails={createDetails(price, type)}
        />
      )}
    </ModalBox>,
    document.getElementById('modal-root')
  );
}

export default ModalBoxPrices;
