import React, { useEffect, useState } from 'react';
import CoinGecko from '../apis/CoinGecko';
import CoinTable from './coinTable';
import Coin from './coin';
import PaginationControls from './paginationControls';

const pageRowOptions = [
  { value: 10, label: '10' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
];

const PaginatedList: React.FunctionComponent = () => {
  const [coins, setCoins] = useState<Coin[]>(() => []);
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
      <CoinTable coins={coins} />
      <PaginationControls
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

export default PaginatedList;
