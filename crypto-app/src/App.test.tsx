import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders Coin Fetch title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Coin Fetch/i);
  expect(titleElement).toBeInTheDocument();
});
