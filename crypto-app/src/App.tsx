import React from 'react';
import './App.css';
import ListPage from './pages/ListPage';
// import { BrowserRouter, Route } from 'react-router-dom';
// import VolumeTrendPage from './pages/VolumeTrendPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Coin Fetch</h1>
      <ListPage />
    </div>
  );
}

export default App;
