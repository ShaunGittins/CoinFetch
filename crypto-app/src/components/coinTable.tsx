import React from 'react';
import CoinInterface from './coinInterface';
import Coin from './coin';
import './coinTable.css';

interface Props {
  coins: CoinInterface[];
}

const CoinTable: React.FunctionComponent<Props> = ({ coins }) => (
  <ul id="coinList">
    {coins.map((coin) => (
      <li className="coinListItem" key={coin.id}>
        <Coin coin={coin} />
      </li>
    ))}
  </ul>
);

export default CoinTable;
