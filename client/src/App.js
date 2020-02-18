import React from 'react';
import { Route } from 'react-router-dom'
import {
        Hotels,
        Login,
        Dashboard,
        Contact,
        Volunteer, CarRental, Flights
        } from './Components/Routes'
import logo from './logo.svg';
import './App.css';

function App() {

// |ROUTE COMPONENTS          | ROUTE CREATED |  COMPONENT BUILT |  Conditional Rendering  |
// |                          |  YES  OR  NO  |  YES    OR   NO  |  YES      OR        NO  |
// |--------------------------|---------------|------------------|-------------------------|
// |Accomidations or "hotels" |  YES          |              NO  |                     NO  |
// |Login                     |           NO  |              NO  |                     NO  |
// |Dashboard                 |               |              NO  |                     NO  |
// |Contact                   |               |              NO  |                     NO  |
// |Volunteer                 |               |              NO  |                     NO  |
// |CarRental                 |               |              NO  |                     NO  |
// |Flights                   |               |              NO  |                     NO  |

  return (
    <div className="App">
        //Routes
          <Route exact path='/' >
              <Hotels />
          </Route>
    </div>
  );
}

export default App;
