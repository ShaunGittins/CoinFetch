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
}, 
{
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    "current_price": 3476.26,
    "market_cap": 413376320426,
    "market_cap_rank": 2,
    "fully_diluted_valuation": null,
    "total_volume": 19140936714,
    "high_24h": 3546.26,
    "low_24h": 3426.08,
    "price_change_24h": -20.100579156817,
    "price_change_percentage_24h": -0.5749,
    "market_cap_change_24h": -171491803.04992676,
    "market_cap_change_percentage_24h": -0.04147,
    "circulating_supply": 117906065.124,
    "total_supply": null,
    "max_supply": null,
    "ath": 4356.99,
    "ath_change_percentage": -19.52858,
    "ath_date": "2021-05-12T14:41:48.623Z",
    "atl": 0.432979,
    "atl_change_percentage": 809669.83937,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
      "times": 82.41300843635668,
      "currency": "btc",
      "percentage": 8241.300843635667
    },
    "last_updated": "2021-10-13T05:47:20.950Z"
  }
];

it('renders coin names', () => {
  render(<CoinList coins={mockCoins} />);
  expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();
  expect(screen.getByText(/Ethereum/i)).toBeInTheDocument();
});