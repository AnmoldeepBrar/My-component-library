import React from 'react';
import { render } from '@testing-library/react';
import TableFooter from './TableFooter';

test('TableFooter is visible', () => {
  const { getByText } = render(<TableFooter>Footer Content</TableFooter>);
  const footerElement = getByText('Footer Content');
  expect(footerElement).toBeInTheDocument();
});

test('TableFooter background color changes when disabled', () => {
  const { container, rerender } = render(<TableFooter backgroundColor="#ffffff">Footer Content</TableFooter>);
  expect(container.firstChild).toHaveStyle('background-color: #ffffff');

  rerender(<TableFooter backgroundColor="#ffffff" disabled>Footer Content</TableFooter>);
  expect(container.firstChild).toHaveStyle('background-color: #ccc');
});
