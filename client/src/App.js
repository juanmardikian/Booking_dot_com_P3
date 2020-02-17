import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'

import HeaderLinks from './components/Header/HeaderLinks'
import Contact from './components/Header/IconNav/Contact'
import Profile from './components/Header/IconNav/Profile'
import Search from './components/Header/IconNav/Search'
import Menu from './components/Header/IconNav/Menu'

import Accommodations from './components/Header/LinksNav/Accommodations'
import Flights from './components/Header/LinksNav/Flights'
import Packages from './components/Header/LinksNav/Packages'
import RentalCar from './components/Header/LinksNav/RentalCar'
import ToursActivities from './components/Header/LinksNav/ToursActivities'
import AirportTaxis from './components/Header/LinksNav/AirportTaxis'
import VolunteerSupport from './components/Header/LinksNav/VolunteerSupport'

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

      <Route exact path='/accommodations'>
        <Accommodations />
        </Route>

        <Route exact path='/flights'>
        <Flights />
        </Route>

        <Route exact path='/packages'>
        <Packages />
        </Route>

        <Route exact path='/rental-car'>
        <RentalCar />
        </Route>

        <Route exact path='/tours-activities'>
        <ToursActivities />
        </Route>

        <Route exact path='/airport-taxis'>
        <AirportTaxis />
        </Route>

        <Route exact path='/volunteer-support'>
        <VolunteerSupport />
        </Route>


    </div>
  );
}

export default App;
