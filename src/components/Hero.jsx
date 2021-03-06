import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='container'>
        {/* leftSide */}
        <div className='left'>
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurrency with your IRA</h1>
          <p>Buy, Sell, and store hundreds of cryptocurrency</p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn'>Learn More!</button>
          </div>
        </div>
        {/* rightSide */}
        <div className='right'>
          <div className='img-container'>
            <img src={Crypto} alt='hero-img' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
