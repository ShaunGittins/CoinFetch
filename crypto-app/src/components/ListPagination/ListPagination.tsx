import React, { useEffect, useState } from 'react';
import CoinGecko from '../../apis/CoinGecko';
import CoinList from '../CoinList/CoinList';
import CoinInterface from '../Coin/CoinInterface';
import Controls from './Controls/Controls';
import './listpagination.css';
import { ReactComponent as LoadingSVG } from '../../assets/Spinner-1s-200px.svg';

const pageRowOptions = [
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
  { value: 250, label: '250' },
];

const ListPagination: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [failedLoad, setFailedLoad] = useState<boolean>(false);
  const [coins, setCoins] = useState<CoinInterface[]>(() => []);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    pageRowOptions[0].value
  );
  const [filter, setFilter] = useState<string>('');

  const fetchData = async () => {
    if (failedLoad) setFailedLoad(false);
    setLoading(true);
    await CoinGecko.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: rowsPerPage,
        page,
        sparkline: false,
      },
    })
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch(() => {
        setFailedLoad(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage]);

  function filterHandleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setFilter(event.target.value);
  }

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(filter.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div id="paginatedList">
      {failedLoad ? (
        <div>
          Something went wrong. Wait a moment then{' '}
          <button type="button" onClick={fetchData}>
            Retry
          </button>
        </div>
      ) : (
        ''
      )}
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
      {loading ? (
        <LoadingSVG id="loadingSVG" />
      ) : (
        <CoinList coins={filteredCoins} />
      )}
      <sub>
        Currently showing {filteredCoins.length} / {rowsPerPage} currencies
        based on filter settings
      </sub>
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
