import React from 'react';
import { render } from '@testing-library/react';
import TableCell from './TableCell';

test('TableCell is visible', () => {
  const { getByText } = render(<TableCell>Cell Content</TableCell>);
  const cellElement = getByText('Cell Content');
  expect(cellElement).toBeInTheDocument();
});

test('TableCell background color changes when disabled', () => {
  const { container, rerender } = render(<TableCell backgroundColor="#ffffff">Cell Content</TableCell>);
  expect(container.firstChild).toHaveStyle('background-color: #ffffff');

  rerender(<TableCell backgroundColor="#ffffff" disabled>Cell Content</TableCell>);
  expect(container.firstChild).toHaveStyle('background-color: #ccc');
});
