import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders text content', () => {
  render(<Text content="Hello, world!" />);
  const textElement = screen.getByText('Hello, world!');
  expect(textElement).toBeInTheDocument();
});

test('changes background color when disabled', () => {
  render(<Text content="Disabled text" disabled />);
  const textElement = screen.getByText('Disabled text');
  expect(textElement).toHaveStyle('background-color: #ccc');
});
