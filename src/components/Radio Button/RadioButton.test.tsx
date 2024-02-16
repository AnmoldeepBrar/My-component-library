import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders radio button with label', () => {
  render(<RadioButton label="Option 1" />);
  const radioButtonElement = screen.getByText('Option 1');
  expect(radioButtonElement).toBeInTheDocument();
});

test('changes background color when disabled', () => {
  render(<RadioButton label="Option 2" disabled />);
  const radioButtonElement = screen.getByText('Option 2');
  expect(radioButtonElement).toHaveStyle('border-color: #ccc');
});
