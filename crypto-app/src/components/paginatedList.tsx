import React from "react";

interface Coin {
    position: number;
    name: string;
    price: number;
    details: string;
};

const coinList: Coin[] = [
    {position: 1, name: "Bitcoin", price: 54536, details: "details1"},
    {position: 2, name: "Ethereum", price: 3523, details: "details2"},
];

const PaginatedList: React.FunctionComponent = () => (
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
                <tr>
                    <td>{coin.position}</td>
                    <td>{coin.name}</td>
                    <td>{coin.price}</td>
                    <td>{coin.details}</td>
                </tr>)}
        </tbody>
    </table>
);

export default PaginatedList;