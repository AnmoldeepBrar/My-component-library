import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

test('renders image', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" />);
  const imgElement = screen.getByAltText('Placeholder Image');
  expect(imgElement).toBeInTheDocument();
});

test('changes background color when disabled', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" disabled />);
  const imgElement = screen.getByAltText('Placeholder Image');
  expect(imgElement).toHaveStyle('background-color: #ccc');
});
