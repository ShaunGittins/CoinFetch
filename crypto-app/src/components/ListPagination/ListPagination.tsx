import React, { useEffect, useState } from 'react';
import CoinGecko from '../../apis/CoinGecko';
import CoinList from '../CoinList/CoinList';
import CoinInterface from '../Coin/CoinInterface';
import Controls from './Controls/Controls';
import './listpagination.css';

const pageRowOptions = [
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];

const ListPagination: React.FunctionComponent = () => {
  const [coins, setCoins] = useState<CoinInterface[]>(() => []);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    pageRowOptions[0].value
  );
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await CoinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: rowsPerPage,
          page,
          sparkline: false,
        },
      });

      setCoins(response.data);
    };

    fetchData();
  }, [page, rowsPerPage]);

  function filterHandleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setFilter(event.target.value);
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div id="paginatedList">
      <label id="filterControl" htmlFor="filter">
        <sub>Filter: </sub>
        <input
          id="filter"
          type="text"
          value={filter}
          onChange={filterHandleChange}
        />
      </label>
      <br />
      <CoinList coins={filteredCoins} />
      <Controls
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(currentPage: number) => setPage(currentPage)}
        onRowCountChange={(currentRowsPerPage: number) =>
          setRowsPerPage(currentRowsPerPage)
        }
        rowCountOptions={pageRowOptions}
      />
    </div>
  );
};

export default ListPagination;
