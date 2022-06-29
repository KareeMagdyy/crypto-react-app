import { useState, useEffect } from "react";
import axios from "axios";
import CoinCard from "./CoinCard";
import "./Featured.css";

const Featured = () => {
  const [data, setData] = useState([]);

  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className='featured'>
      <div className='container'>
        {/* lefSide */}
        <div className='left'>
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className='btn'>See More Coins</button>
        </div>
        {/* rightSide */}
        <div className='right'>
          {data.map((item) => (
            <CoinCard
              key={item.id}
              img={item.image}
              name={item.name}
              price={item.current_price}
              changePercentage={item.price_change_percentage_24h}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
