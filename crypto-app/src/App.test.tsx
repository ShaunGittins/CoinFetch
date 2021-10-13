import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders Coin Fetch title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Coin Fetch/i);
  expect(linkElement).toBeInTheDocument();
});
