import React from 'react';
import CoinInterface from './coinInterface';
import Coin from './coin';
import './coinTable.css';

interface Props {
  coins: CoinInterface[];
}

const CoinTable: React.FunctionComponent<Props> = ({ coins }) => (
  <table id="coinTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {coins.map((coin) => (
        <Coin coin={coin} />
      ))}
    </tbody>
  </table>
);

export default CoinTable;
