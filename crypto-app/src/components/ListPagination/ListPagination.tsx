import React, { useEffect, useState } from 'react';
import CoinGecko from '../../apis/CoinGecko';
import CoinList from '../CoinList/CoinList';
import CoinInterface from '../Coin/CoinInterface';
import Controls from './Controls/Controls';

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

  return (
    <div>
      <CoinList coins={coins} />
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
