import React from 'react';
import { render } from '@testing-library/react';

import TableHeader from './TableHeader';

describe('TableHeader', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<TableHeader>Header</TableHeader>);
    expect(getByText('Header')).toBeInTheDocument();
  });

  it('renders with background color when provided', () => {
    const { container } = render(<TableHeader backgroundColor="#ff0000">Header</TableHeader>);
    expect(container.firstChild).toHaveStyle('background-color: #ff0000');
  });
});
