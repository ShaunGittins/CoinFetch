import React, { useState } from 'react';
import CoinInterface from './CoinInterface';
import './coin.css';

interface Props {
  coin: CoinInterface;
}

const CoinTable: React.FunctionComponent<Props> = ({ coin }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  function ToggleExpansion() {
    setExpanded(!expanded);
  }

  function handleKeyPress(event: { key: string }) {
    if (event.key === 'Enter') {
      ToggleExpansion();
    }
  }

  function DataExists(value: number | null | undefined) {
    if (value === undefined || value === null) {
      return 'No data';
    }
    return value.toLocaleString();
  }

  return (
    <div>
      <div
        id="listItemCollapsed"
        onClick={ToggleExpansion}
        role="button"
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
        <div>
          <img
            data-testid="coinIcon"
            className="coinIcon"
            src={coin.image}
            alt={coin.name}
          />
          {coin.name} ({coin.symbol})
        </div>
        <span id="expansionHint">{expanded ? '▲' : '▼'}</span>
      </div>
      <div id="listItemExpansion" style={expanded ? {} : { display: 'none' }}>
        <div>
          <h4>Price</h4>
          <br />${DataExists(coin.current_price)}
          <br /> 24h Low: ${DataExists(coin.low_24h)}- High: $
          {DataExists(coin.high_24h)}
          <br />
          Change: ${DataExists(coin.price_change_24h)}(
          {coin.price_change_percentage_24h}%)
        </div>
        <div>
          <h4>Market Cap</h4>
          <br />${DataExists(coin.market_cap)}
          (Rank #{coin.market_cap_rank}) <br />
          24h Change: ${DataExists(coin.market_cap_change_24h)}(
          {coin.market_cap_change_percentage_24h}%)
        </div>
      </div>
    </div>
  );
};

export default CoinTable;
