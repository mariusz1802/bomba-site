import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Input from '../Input/Input';
import ContactForm from '../../view/Contact/ContactForm';

describe('Form Component ', () => {
  it('should render value in input', () => {
    render(<ContactForm />);
    const inputElement = screen.getByPlaceholderText('placeholder.subject');
    fireEvent.change(inputElement, { target: { value: 'Winter' } });
    console.log(inputElement);
  });
});
