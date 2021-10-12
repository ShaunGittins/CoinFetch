import React from 'react';
import './controls.css';

interface RowOption {
  value: number;
  label: string;
}

interface Props {
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowCountChange: (size: number) => void;
  rowCountOptions: RowOption[];
}

const PaginationControls: React.FunctionComponent<Props> = ({
  page,
  rowsPerPage,
  onPageChange,
  onRowCountChange,
  rowCountOptions,
}) => {
  function gotoPreviousPage() {
    if (page !== 1) {
      onPageChange(page - 1);
    }
  }

  function gotoNextPage() {
    onPageChange(page + 1);
  }

  function changeRowsPerPage(event: React.ChangeEvent<HTMLSelectElement>) {
    onRowCountChange(Number(event.target.value));
  }

  return (
    <div id="container">
      <label htmlFor="rowsPerPage">
        Rows per page:&nbsp;
        <select
          value={rowsPerPage}
          onChange={changeRowsPerPage}
          id="rowsPerPage"
        >
          {rowCountOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <span id="pageCounter">
        &nbsp;{page * rowsPerPage - rowsPerPage + 1}-{page * rowsPerPage} of
        ????
      </span>
      <button
        className={`pageButton${page === 1 ? 'Disabled' : ''}`}
        type="button"
        onClick={gotoPreviousPage}
      >
        &lt;
      </button>
      <button className="pageButton" type="button" onClick={gotoNextPage}>
        &gt;
      </button>
    </div>
  );
};

export default PaginationControls;