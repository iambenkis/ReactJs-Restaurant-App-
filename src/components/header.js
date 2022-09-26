import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './resto.png';

const Header = () => (
  <div className="header">
    <img src={logo} alt="logo" />
    <ul className="nav-list">
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/menu">MENU</Link>
      </li>
      <li>
        <Link to="/contact">CONTACTS</Link>
      </li>
    </ul>
  </div>
);

export default Header;
