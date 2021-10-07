import React from 'react';
import './App.css';
import PaginatedList from './components/paginatedList';

function App(): JSX.Element {
  return (
    <div className="App">
      <p>Start</p>
      <PaginatedList />
    </div>
  );
}

export default App;
