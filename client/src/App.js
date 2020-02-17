import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Header2 from './components/Header2'
import HeaderLinks from './components/HeaderLinks'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Search from './components/Search'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Header />
        <HeaderLinks />
      </Route>


      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route exact path='/search'>
        <Search />
      </Route>
      <Route exact path='/menu'>
        <Menu />
      </Route>


    </div>
  );
}

export default App;
