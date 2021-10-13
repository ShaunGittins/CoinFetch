import React from 'react';
import { render, screen } from '@testing-library/react';
import Coin from './Coin';

const mockCoin = {
  id: 'bitcoin',
  symbol: 'btc',
  name: 'Bitcoin',
  image:
    'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  current_price: 55499,
  market_cap: 1054317187416,
  market_cap_rank: 1,
  fully_diluted_valuation: 1175050117827,
  total_volume: 38358472924,
  high_24h: 58066,
  low_24h: 54705,
  price_change_24h: -1614.447571454955,
  price_change_percentage_24h: -2.82674,
  market_cap_change_24h: -22080134743.47937,
  market_cap_change_percentage_24h: -2.0513,
  circulating_supply: 18842312,
  total_supply: 21000000,
  max_supply: 21000000,
  ath: 64805,
  ath_change_percentage: -13.65634,
  ath_date: '2021-04-14T11:54:46.763Z',
  atl: 67.81,
  atl_change_percentage: 82418.20188,
  atl_date: '2013-07-06T00:00:00.000Z',
  roi: null,
  last_updated: '2021-10-13T05:47:43.896Z',
};

it('renders Coin name', () => {
  render(<Coin coin={mockCoin} />);
  const nameElement = screen.getByText(/Bitcoin/i);
  expect(nameElement).toBeInTheDocument();
});

it('renders Coin symbol', () => {
  render(<Coin coin={mockCoin} />);
  const symbolElement = screen.getByText(/(btc)/i);
  expect(symbolElement).toBeInTheDocument();
});

it('renders Coin image', () => {
  render(<Coin coin={mockCoin} />);
  const imageElement = screen.getByTestId('coinIcon');
  expect(imageElement).toBeInTheDocument();
});
