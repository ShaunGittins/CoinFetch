import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ListPage from './pages/ListPage';
// import VolumeTrendPage from './pages/VolumeTrendPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ListPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
