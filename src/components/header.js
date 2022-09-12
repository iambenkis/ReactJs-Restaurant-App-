import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './header.css';
import logo from './resto.png';

const tagClicked = () => {
  console.log('Hello');
};
const Header = (props) => (
  <div className="header">
    <img src={logo} />
    <ul className="nav-list">
      <li onClick={tagClicked}>
          <Link to="/">HOME</Link>
        </li>
      <li onClick={tagClicked}>
         <Link to="/menu">MENU</Link>
      </li>
      <li onClick={tagClicked}>
        <Link to="/contact">CONTACTS</Link>
      </li>
    </ul>
  </div>
);

export default Header;
