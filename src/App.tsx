import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FlashSale from './pages/FlashSale';
import Home from './pages/Home';
import Login from './pages/Login';
import Redirect from './pages/Redirect';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/flash-sale" element={<FlashSale />}/>
      </Routes>
    </div>
  );
}

export default App;
