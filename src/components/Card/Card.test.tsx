// Card.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

test('renders card content', () => {
  render(<Card title="Test Card" content="Test card content" />);
  const cardTitleElement = screen.getByText(/Test Card/i);
  const cardContentElement = screen.getByText(/Test card content/i);
  expect(cardTitleElement).toBeInTheDocument();
  expect(cardContentElement).toBeInTheDocument();
});

test('changes background color when disabled', () => {
  render(<Card title="Disabled Card" content="Disabled card content" disabled />);
  const cardElement = screen.getByText(/Disabled Card/i);
  expect(cardElement).toHaveStyle('background-color: #ccc');
});
