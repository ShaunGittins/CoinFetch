import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Controls
      page={0}
      rowsPerPage={0}
      onPageChange={function (page: number): void {
        throw new Error('Function not implemented.');
      }}
      onRowCountChange={function (size: number): void {
        throw new Error('Function not implemented.');
      }}
      rowCountOptions={[]}
    />,
    div
  );
});
