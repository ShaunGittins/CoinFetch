import React from 'react';
import Coin from './coin';
import './coinTable.css';

interface Props {
  coins: Coin[];
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
        <tr key={coin.id}>
          <td>{coin.name}</td>
          <td>{coin.symbol}</td>
          <td>{coin.current_price}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CoinTable;