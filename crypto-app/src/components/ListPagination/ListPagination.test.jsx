import React from 'react';
import { render, screen } from '@testing-library/react';
import ListPagination from './ListPagination';

it('renders essential components', () => {
  render(<ListPagination />);
  const filterElement = screen.getByTestId('filter');
  expect(filterElement).toBeInTheDocument();
  expect(filterElement).toHaveTextContent('Filter:');
  expect(screen.getByTestId('loading')).toBeInTheDocument();
  expect(screen.getByTestId('controls')).toBeInTheDocument();
});

// TODO: test successful load of mock api.get data
