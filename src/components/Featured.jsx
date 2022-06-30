import { useState, useEffect } from "react";
import axios from "axios";
import CoinCard from "./CoinCard";
import "./Featured.css";

const Featured = () => {
  const [data, setData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(
    JSON.parse(localStorage.getItem("currentCur")) || "USD"
  );

  const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=6&page=1&sparkline=false`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
    localStorage.setItem("currentCur", JSON.stringify(selectedCurrency));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCurrency]);

  const currencyChangeHandler = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <section className='featured' id='featured'>
      <div className='container'>
        {/* lefSide */}
        <div className='left'>
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className='btn'>See More Coins</button>
        </div>

        {/* rightSide */}
        <div className='right'>
          <div className='currency-options'>
            <h3>Change Currency</h3>
            <select onChange={currencyChangeHandler} value={selectedCurrency}>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>SAR</option>
              <option>AED</option>
              <option>SEK</option>
            </select>
          </div>
          {data.map((item) => (
            <CoinCard
              key={item.id}
              img={item.image}
              name={item.name}
              price={item.current_price}
              changePercentage={item.price_change_percentage_24h}
              updated={item.last_updated}
              currency={selectedCurrency}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
