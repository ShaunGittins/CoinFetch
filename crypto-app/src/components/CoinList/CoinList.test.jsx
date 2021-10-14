import React from 'react';
import { render, screen } from '@testing-library/react';
import CoinList from './CoinList';

const mockCoins = [{
  id: 'bitcoin',
  symbol: 'btc',
  name: 'Bitcoin',
  image:
    'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  current_price: 55499,
  market_cap: 1054317187416,
  market_cap_rank: 1,
  total_volume: 38358472924,
  high_24h: 58066,
  low_24h: 54705,
  price_change_24h: -1614.447571454955,
  price_change_percentage_24h: -2.82674,
  market_cap_change_24h: -22080134743.47937,
  market_cap_change_percentage_24h: -2.0513,
}, 
{
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    current_price: 3476.26,
    market_cap: 413376320426,
    market_cap_rank: 2,
    total_volume: 19140936714,
    high_24h: 3546.26,
    low_24h: 3426.08,
    price_change_24h: -20.100579156817,
    price_change_percentage_24h: -0.5749,
    market_cap_change_24h: -171491803.04992676,
    market_cap_change_percentage_24h: -0.04147,
  }
];

it('renders coin names', () => {
  render(<CoinList coins={mockCoins} />);
  expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();
  expect(screen.getByText(/Ethereum/i)).toBeInTheDocument();
});