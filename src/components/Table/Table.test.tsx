import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

test('renders table with data', () => {
  const data = [
    ['Name', 'Age', 'Country'],
    ['John Doe', 30, 'USA'],
    ['Jane Smith', 25, 'Canada'],
    ['Alice Johnson', 35, 'UK'],
  ];
  render(<Table data={data} />);
  const tableElement = screen.getByText('Name');
  expect(tableElement).toBeInTheDocument();
});

test('changes background color and cursor when disabled', () => {
  const data = [
    ['Name', 'Age', 'Country'],
    ['John Doe', 30, 'USA'],
    ['Jane Smith', 25, 'Canada'],
    ['Alice Johnson', 35, 'UK'],
  ];
  render(<Table data={data} disabled />);
  const tableElement = screen.getByText('Name');
  expect(tableElement).toHaveStyle('background-color: #ccc');
  expect(tableElement).toHaveStyle('cursor: not-allowed');
});
