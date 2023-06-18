import React from 'react';
import CheckedButton from './Elements/CheckedBox';
import PropTypes from 'prop-types';
import ToCheckBox from './Elements/ToCheckBox';
import TitleComponent from './Elements/TitleComponent';
import CountInput from './Elements/CountInput';

function Factory({
  component,
  checked,
  onChange,
  value,
  setValue,
  plusButton,
  minusButton,
  name,
}) {
  switch (component.type) {
    case 'title':
      return <TitleComponent text={component.text} />;
    case 'checkbox':
      return <CheckedButton text={component.text} />;
    case 'tocheck':
      return (
        <ToCheckBox
          text={component.text}
          checked={checked}
          onChange={onChange}
        />
      );
    case 'prices':
      return (
        <CountInput
          text={component.text}
          value={value}
          setValue={setValue}
          plusButton={plusButton}
          minusButton={minusButton}
          name={name}
        />
      );

    default:
      return <div>Reload...</div>;
  }
}

Factory.propTypes = {
  component: PropTypes.object.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.number,
  setValue: PropTypes.func,
  plusButton: PropTypes.func,
  minusButton: PropTypes.func,
  name: PropTypes.string,
};

export default Factory;
