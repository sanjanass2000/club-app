import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

function App() {


  return (
    <div>
      <Home />
    </div>
  );  
}

export default App;
