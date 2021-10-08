import React from 'react';

/* eslint-disable camelcase */
interface Coin {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
}

interface Props {
    coins: Coin[];
}

const CoinTable: React.FunctionComponent<Props> = ({ coins }) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {coins.map((coin) =>
                <tr key={coin.id}>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>{coin.current_price}</td>
                </tr>)}
        </tbody>
    </table>
);

export default CoinTable;