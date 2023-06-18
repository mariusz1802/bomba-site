import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input/Input';

describe('Input Component ', () => {
  it('should render value in Iput', () => {
    render(<Input maxLength={200} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement.value).toBe('test');
  });
});
