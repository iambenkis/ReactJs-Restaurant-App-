// import React from "react";
// import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/homeView';
import './App.css';
import Menu from './components/menu';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
