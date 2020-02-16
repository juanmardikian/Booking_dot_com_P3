import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import HeaderLinks from './components/HeaderLinks'

function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderLinks/>
   
    </div>
  );
}

export default App;
