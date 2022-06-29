import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const CoinCard = ({ img, name, price, changePercentage }) => {
  return (
    <div className='card'>
      <div className='top'>
        <img src={img} alt={name} />
      </div>
      <div>
        <h5>{name}</h5>
        <p>${price.toLocaleString()}</p>
      </div>
      <span>
        {changePercentage < 0 ? (
          <span className='red'>
            <FiArrowDown className='icon' />
            {changePercentage.toFixed(2)}%
          </span>
        ) : (
          <span className='green'>
            <FiArrowUpRight className='icon' />
            {changePercentage.toFixed(2)}%
          </span>
        )}
      </span>
    </div>
  );
};

export default CoinCard;
