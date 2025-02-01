import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
// import './index.css';
import AdminLayout from './pages/admin/AdminLayout';

function App() {


  return (
    <div className="app">
      <Home/>
    </div>
  );  
}

export default App;
