/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import Factory from './Factory';
import Counter from './Elements/Counter';
import styled from 'styled-components';

const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

function Prices({ type, setPrice, price, action, modalName }) {
  const handleChange = (checkName) => {
    const updateCheck = type.map((element) => {
      if (element.name === checkName) {
        element.checked = !element.checked;
        if (element.checked) {
          setPrice(price + element.price);
        } else {
          setPrice(price - element.price);
        }
        return element;
      }
      return element;
    });
    action(updateCheck);
  };

  const plusButton = (counterName, max) => {
    const updatedCounters = type.map((element) => {
      if (element.name === counterName && element.value < max) {
        element.value++;
        element.counter++;
        setPrice(price + element.price);
        return element;
      }
      return element;
    });
    action(updatedCounters);
  };

  const minusButton = (counterName, min) => {
    const updatedCounters = type.map((element) => {
      if (element.name === counterName && element.value > min) {
        element.value--;
        element.counter--;
        setPrice(price - element.price);
        return element;
      }
      return element;
    });
    action(updatedCounters);
  };
  return (
    <div>
      {i18next.t(modalName, { returnObjects: true }).map((element, i) => (
        <Factory key={i} component={element} number={i} />
      ))}
      {type.map((element, i) => (
        <>
          <Factory
            key={i}
            component={element}
            name={element.name}
            value={element.value}
            modalName={modalName}
            checked={element.checked}
            onChange={() => handleChange(element.name)}
            plusButton={() => plusButton(element.name, element.max)}
            minusButton={() => minusButton(element.name, element.min)}
          />
        </>
      ))}

      <PriceWrapper>
        <Counter price={price} />
      </PriceWrapper>
    </div>
  );
}
Prices.propTypes = {
  type: PropTypes.any,
  setPrice: PropTypes.func,
  price: PropTypes.number,
  onClose: PropTypes.func,
  action: PropTypes.func,
  modalName: PropTypes.string,
};

export default Prices;
