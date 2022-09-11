import React from 'react';
import './header.css';
import logo from './resto.png';

const tagClicked = () => {
  console.log('Hello');
};
const Header = (props) => (
  <div className="header">
    <img src={logo} />
    <ul className="nav-list">
      <li onClick={tagClicked}>HOME</li>
      <li onClick={tagClicked}>MENU</li>
      <li onClick={tagClicked}>CONTACTS</li>
    </ul>
  </div>
);

export default Header;
