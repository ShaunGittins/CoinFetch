import React, { useEffect, useState } from 'react';
import CoinGecko from '../apis/CoinGecko';

/* eslint-disable camelcase */
interface Coin {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
};

const PaginatedList: React.FunctionComponent = () => {
    const [coins, setCoins] = useState<Coin[]>(() => []);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await CoinGecko.get('/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 5,
                    page,
                    sparkline: false,
                }
            });

            setCoins(() => response.data);
        }

        fetchData();
    }, [page]);

    function gotoPreviousPage() {
        if (page !== 1) {
            setPage(prevPage => prevPage - 1);
        }
    }

    function gotoNextPage() {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <div>
            <button type='button' onClick={gotoPreviousPage}>Set page to 1</button>
            <button type='button' onClick={gotoNextPage}>Set page to 2</button>
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
        </div>
    );
}

export default PaginatedList;