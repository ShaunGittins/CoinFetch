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

    const pageRowOptions = [
        { value: 10, label: '10' },
        { value: 25, label: '25' },
    ];

    const [rowsPerPage, setRowsPerPage] = useState<number>(pageRowOptions[0].value);

    useEffect(() => {
        const fetchData = async () => {
            const response = await CoinGecko.get('/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: rowsPerPage,
                    page,
                    sparkline: false,
                }
            });

            setCoins(() => response.data);
        }

        fetchData();
    }, [page, rowsPerPage]);

    function gotoPreviousPage() {
        if (page !== 1) {
            setPage(prevPage => prevPage - 1);
        }
    }

    function gotoNextPage() {
        setPage(prevPage => prevPage + 1);
    }

    function changeRowsPerPage(event: React.ChangeEvent<HTMLSelectElement>) {
        setRowsPerPage(Number(event.target.value));
    }

    return (
        <div>
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
            <label htmlFor="a">
                Rows per page:
                <select value={rowsPerPage} onChange={changeRowsPerPage} id="a">
                    {pageRowOptions.map((option) =>
                        <option key={option.value} value={option.value}>{option.label}</option>
                    )}
                </select>
            </label>
            <span>{(page * rowsPerPage) - rowsPerPage + 1}-{(page * rowsPerPage)} of ?</span>
            <button type='button' onClick={gotoPreviousPage}>&lt;</button>
            <button type='button' onClick={gotoNextPage}>&gt;</button>
        </div>
    );
}

export default PaginatedList;