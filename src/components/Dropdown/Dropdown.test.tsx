// Dropdown.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown options', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  render(<Dropdown options={options} />);
  const dropdownElement = screen.getByRole('combobox');
  expect(dropdownElement).toBeInTheDocument();
  options.forEach((option) => {
    expect(screen.getByText(option)).toBeInTheDocument();
  });
});

test('changes background color when disabled', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  render(<Dropdown options={options} disabled />);
  const dropdownElement = screen.getByRole('combobox');
  expect(dropdownElement).toHaveStyle('background-color: #ccc');
});
