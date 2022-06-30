import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./CoinCard.css";

const CoinCard = ({
  img,
  name,
  price,
  changePercentage,
  updated,
  currency,
}) => {
  const lastUpdated = Date.parse(updated);
  const currentTime = Date.parse(new Date().toISOString());
  const lastUpdatedTime = currentTime - lastUpdated;
  const lastUpdatedTimeMins = lastUpdatedTime / 1000 / 60;
  const lastUpdatedTimeHours = lastUpdatedTimeMins / 60;

  let lastUpdateRender = "";
  if (lastUpdatedTimeMins < 1) {
    lastUpdateRender = "Just Updated";
  } else if (lastUpdatedTimeMins > 0 && lastUpdatedTimeMins < 60) {
    lastUpdateRender = `${Math.round(lastUpdatedTimeMins)} ${
      Math.round(lastUpdatedTimeMins) < 2 ? "Min Ago" : "Mins Ago"
    }`;
  } else {
    lastUpdateRender = `${lastUpdatedTimeHours.toFixed(1)} ${
      lastUpdatedTimeHours.toFixed(1) <= 1 ? "Hour Ago" : "Hours Ago"
    }`;
  }

  let currencySymbol = "";

  if (currency === "EUR") {
    currencySymbol = "€";
  } else if (currency === "GBP") {
    currencySymbol = "£";
  } else if (currency === "SAR") {
    currencySymbol = "SR ";
  } else if (currency === "AED") {
    currencySymbol = "AED ";
  } else if (currency === "SEK") {
    currencySymbol = "kr ";
  } else {
    currencySymbol = "$";
  }

  return (
    <div className='card'>
      <div className='top'>
        <img src={img} alt={name} />
      </div>
      <div>
        <h5>{name}</h5>
        <p>
          {currencySymbol}
          {price.toLocaleString()}
        </p>
      </div>
      <span>
        {changePercentage < 0 ? (
          <span className='red'>
            <FiArrowDown size={25} className='icon' />
            {changePercentage.toFixed(2)}%
          </span>
        ) : (
          <span className='green'>
            <FiArrowUpRight size={25} className='icon' />
            {changePercentage.toFixed(2)}%
          </span>
        )}
      </span>
      <div className='updated-time'>Updated: {lastUpdateRender}</div>
    </div>
  );
};

export default CoinCard;
