import React, { useState } from 'react';
import CoinInterface from './CoinInterface';
import './coin.css';

interface Props {
  coin: CoinInterface;
}

const CoinTable: React.FunctionComponent<Props> = ({ coin }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  function toggleExpansion() {
    setExpanded(!expanded);
  }

  function handleKeyPress(event: { key: string }) {
    if (event.key === 'Enter') {
      toggleExpansion();
    }
  }

  function colorPercentageChange(value: number | undefined) {
    let result = 'gray';
    if (value === undefined || value === 0) {
      result = 'gray';
    } else if (value > 0) {
      result = 'green';
    } else {
      result = 'red';
    }
    return result;
  }

  const priceChangeStyle = {
    color: colorPercentageChange(coin.price_change_percentage_24h),
  };

  const marketCapChangeStyle = {
    color: colorPercentageChange(coin.market_cap_change_percentage_24h),
  };

  return (
    <div>
      <div
        id="listItemCollapsed"
        onClick={toggleExpansion}
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
          <ul>
            <li>
              ${coin.current_price?.toLocaleString()}
              <sub style={priceChangeStyle}>
                {` ${coin.price_change_percentage_24h?.toFixed(2)}`}%
              </sub>
            </li>
            <li>
              24h Low / High: ${coin.low_24h?.toLocaleString()} / $
              {coin.high_24h?.toLocaleString()}
            </li>
            <li>24h Change: ${coin.price_change_24h?.toLocaleString()}</li>
          </ul>
        </div>
        <div>
          <h4>Market Cap</h4>
          <ul>
            <li>
              ${coin.market_cap?.toLocaleString()}
              <sub> Rank #{coin.market_cap_rank}</sub>
            </li>
            <li>
              24h Change: ${coin.market_cap_change_24h?.toLocaleString()}
              <sub style={marketCapChangeStyle}>
                {` ${coin.market_cap_change_percentage_24h?.toFixed(2)}`}%
              </sub>
            </li>
          </ul>
        </div>
        <div>
          <h4>Supply</h4>
          <ul>
            <li>
              Circulating Supply: {coin.circulating_supply?.toLocaleString()}
            </li>
            <li>Total Supply: {coin.total_supply?.toLocaleString()}</li>
            <li>Max Supply: {coin.max_supply?.toLocaleString()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoinTable;
