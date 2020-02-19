import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserLogin from './components/userLogin';
import UserCreate from './components/userCreate';

function App() {
  return (
    <div className="App">
      <UserCreate/>
      <UserLogin/>
    </div>
  );
}

export default App;
