import React, { useEffect } from 'react';
import CoinGecko from '../apis/CoinGecko';

interface Coin {
    position: number;
    name: string;
    price: number;
    details: string;
};

const coinList: Coin[] = [
    {position: 1, name: 'Bitcoin', price: 54536, details: 'details1'},
    {position: 2, name: 'Ethereum', price: 3523, details: 'details2'},
];

const PaginatedList: React.FunctionComponent = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await CoinGecko.get("/coins/list?include_platform=false", {
                params: {
                    vs_currency: "usd",
                    ids: "bitcoin, ethereum",
                }
            });

            console.log(response.data);
        }

        fetchData();
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {coinList.map((coin) => 
                    <tr key={coin.position}>
                        <td>{coin.position}</td>
                        <td>{coin.name}</td>
                        <td>{coin.price}</td>
                        <td>{coin.details}</td>
                    </tr>)}
            </tbody>
        </table>
    );
}

export default PaginatedList;