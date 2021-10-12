import React from 'react';
import CoinInterface from '../Coin/CoinInterface';
import Coin from '../Coin/Coin';
import './coinlist.css';

interface Props {
  coins: CoinInterface[];
}

const CoinList: React.FunctionComponent<Props> = ({ coins }) => (
  <ul id="coinList">
    {coins.map((coin) => (
      <li className="coinListItem" key={coin.id}>
        <Coin coin={coin} />
      </li>
    ))}
  </ul>
);

export default CoinList;
