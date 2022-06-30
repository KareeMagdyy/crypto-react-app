import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header className={`header`}>
      <div className='container'>
        <h1>
          De<span className='primary'>Fi</span>
        </h1>
        <ul className={`nav-menu ${click && "active"}`}>
          <li>
            <a href='#home' onClick={handleClick}>
              Home
            </a>
          </li>
          <li>
            <a href='#featured' onClick={handleClick}>
              Features
            </a>
          </li>
          <li>
            <a href='#earn' onClick={handleClick}>
              Earn
            </a>
          </li>
          <li>
            <a href='#contact' onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
        <div className='btn-group'>
          <button className='btn'>Connect Wallet</button>
        </div>
        <div className='hamburger' onClick={handleClick}>
          {!click ? (
            <FaBars size={20} style={{ color: "#333" }} />
          ) : (
            <FaTimes size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
