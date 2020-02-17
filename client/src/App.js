import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'

import HeaderLinks from './components/HeaderLinks'
import Contact from './components/IconNav/Contact'
import Profile from './components/IconNav/Profile'
import Search from './components/IconNav/Search'
import Menu from './components/IconNav/Menu'

import Accommodations from './components/LinksNav/Accommodations'
import Flights from './components/LinksNav/Flights'
import Packages from './components/LinksNav/Packages'
import RentalCar from './components/LinksNav/RentalCar'
import ToursActivities from './components/LinksNav/ToursActivities'
import AirportTaxis from './components/LinksNav/AirportTaxis'
import VolunteerSupport from './components/LinksNav/VolunteerSupport'

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
