import React from 'react';
import './App.css';
import ListPage from './pages/ListPage';
// import { BrowserRouter, Route } from 'react-router-dom';
// import VolumeTrendPage from './pages/VolumeTrendPage';

function App(): JSX.Element {
  document.title = 'Coin Fetch';

  return (
    <div className="App">
      <div id="titleContainer">
        <h1>Coin Fetch</h1>
      </div>
      <ListPage />
    </div>
  );
}

export default App;
