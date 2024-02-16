import React from 'react';
import { render } from '@testing-library/react';
import TableRow from './TableRow';

test('TableRow is visible', () => {
  const { getByText } = render(<TableRow>Row Content</TableRow>);
  const rowElement = getByText('Row Content');
  expect(rowElement).toBeInTheDocument();
});

test('TableRow background color changes when disabled', () => {
  const { container, rerender } = render(<TableRow backgroundColor="#ffffff">Row Content</TableRow>);
  expect(container.firstChild).toHaveStyle('background-color: #ffffff');

  rerender(<TableRow backgroundColor="#ffffff" disabled>Row Content</TableRow>);
  expect(container.firstChild).toHaveStyle('background-color: #ccc');
});
