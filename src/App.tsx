import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import GetData from './GetData';
import { NewsHome } from './NewsApi/NewsHome';
import TrainHome from './TrainApi/TrainHome';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <TrainHome/> */}
      <NewsHome/>
    </div>
  );
}

export default App;
