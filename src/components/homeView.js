import React from 'react';
import { BrowserRouter as Route } from "react-router-dom"
import './header.css';

const Home = (props) => (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome</h1>
        <h2>BENKIS RESTAURANT</h2>
        <p>AT OUR RESTAURANT WE BRING YOU A LITTLE PIECE OF DRC.</p>
        <button>VIEW MENU</button>
      </div>
    </div>
);

export default Home;
