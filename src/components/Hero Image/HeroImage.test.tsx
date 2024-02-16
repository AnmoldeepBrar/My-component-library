import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders hero image component', () => {
  const { getByAltText } = render(<HeroImage src="https://via.placeholder.com/600x400" alt="Test Image" />);
  const imageElement = getByAltText('Test Image');
  expect(imageElement).toBeInTheDocument();
});

test('renders hero image component with disabled state', () => {
  const { getByAltText } = render(
    <HeroImage src="https://via.placeholder.com/600x400" alt="Test Image" disabled={true} />
  );
  const imageElement = getByAltText('Test Image');
  expect(imageElement).toHaveStyle('filter: grayscale(100%)');
});
