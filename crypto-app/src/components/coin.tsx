import React, { useState } from 'react';
import CoinInterface from './coinInterface';
import './coin.css';

interface Props {
  coin: CoinInterface;
}

const CoinTable: React.FunctionComponent<Props> = ({ coin }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  function ToggleExpansion() {
    setExpanded(!expanded);
  }

  return (
    <>
      <tr key={coin.id} onClick={ToggleExpansion}>
        <td>
          <img className="coinIcon" src={coin.image} alt={coin.name} />
          {coin.name}
        </td>
        <td>{coin.symbol}</td>
        <td>
          ${coin.current_price.toLocaleString()}
          <span id="detailsHint">Info</span>
        </td>
      </tr>
      <tr style={expanded ? {} : { display: 'none' }}>
        <td align="center" colSpan={3}>
          <div id="detailsContainer">
            <div>
              <b>Price</b>
              <br />${coin.current_price.toLocaleString()}
              <br /> 24h Low ${coin.low_24h.toLocaleString()} - High: $
              {coin.high_24h.toLocaleString()}
              <br />
              Change: ${coin.price_change_24h.toLocaleString()} (
              {coin.price_change_percentage_24h}%)
            </div>
            <div>
              <b>Market Cap</b>
              <br />${coin.market_cap.toLocaleString()} (Rank #
              {coin.market_cap_rank}) <br />
              24h Change: ${coin.market_cap_change_24h.toLocaleString()} (
              {coin.market_cap_change_percentage_24h}%)
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default CoinTable;
