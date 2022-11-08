import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './component/header';
// import Info from './component/info';
// import Menu from './component/menu';
// import Review from './component/review';
// import NavBar from './component/NavBar';
// import reportWebVitals from './reportWebVitals';
import Section from './pages/Homepage';
import Homepage from './pages/Homepage';
import ReviewAll from './pages/ReviewAll';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/ReviewAll" element={<ReviewAll />}></Route>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
