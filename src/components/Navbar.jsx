import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header className='header'>
      <div className='container'>
        <h1>
          De<span className='primary'>Fe</span>
        </h1>
        <ul className={`nav-menu ${click && "active"}`}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Features</a>
          </li>
          <li>
            <a href='/'>Earn</a>
          </li>
          <li>
            <a href='/'>Contact</a>
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
