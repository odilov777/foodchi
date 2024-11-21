import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, ScrollLink } from 'react-scroll';
import logo from './Logo.png';
import cart from './Group.png';
import './navbar.css';

const Navbar = ({ cartCounts }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Navbar'>
      <div className='Navbar-Wrapper'>
        <img src={logo} alt='logo' />
        <div className='menu-toggle' onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div className={`text-wrapper ${menuOpen ? 'active' : ''}`}>
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="Order" smooth={true} duration={500}>Order</Link>
          <Link to="Menu" smooth={true} duration={500}>Company</Link>
          <Link to="Menu" smooth={true} duration={500}>Faq</Link>
          <Link to="Store" smooth={true} duration={500}>Contact</Link>
          <div className='cart-wrapper'>
            <img src={cart}/>
            <span className="cart-count">{cartCounts}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
