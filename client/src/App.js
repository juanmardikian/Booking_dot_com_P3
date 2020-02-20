import React from 'react';
import { Route } from 'react-router-dom'
import Hotels from './Components/Routes/Hotels'
import Hamburger from './Components/Routes/Hamburger'
import CarRental from './Components/Routes/CarRental'
import Flights from './Components/Routes/Flights'
import Contact from './Components/Routes/Contact'
import HelpCenter from './Components/Routes/HelpCenter'

function App() {

    // |ROUTE COMPONENTS          | ROUTE CREATED |  COMPONENT BUILT |  Conditional Rendering  |
    // |                          |  YES  OR  NO  |  YES    OR   NO  |  YES      OR        NO  |
    // |--------------------------|---------------|------------------|-------------------------|
    // |Accomidations or "hotels" |  YES          |              NO  |                     NO  |
    // |Hamburger                 |  YES          |              NO  |                     NO  |
    // |Login                     |           NO  |              NO  |                     NO  |
    // |Dashboard                 |               |              NO  |                     NO  |
    // |Contact                   |               |              NO  |                     NO  |
    // |Volunteer                 |               |              NO  |                     NO  |
    // |CarRental                 |  YES          |  YES             |                     NO  |
    // |Flights                   |  YES          |  YES             |                     NO  |

    return (
        <div className="App">


        <Route exact="exact" path='/'>
            <Hotels/>
        </Route>

        <Route exact="exact" path='/car'>
            <CarRental/>
        </Route>

        <Route exact="exact" path='/flights'>
            <Flights/>
        </Route>

        <Route exact="exact" path='/menu'>
            <Hamburger/>
        </Route>

        <Route exact="exact" path='/contact'>
            <Contact/>
        </Route>

        <Route exact="exact" path='/customer'>
            <HelpCenter/>
        </Route>





    </div>)
}

export default App;

// import Footer from './components/Shared/Footer'
// import Header from './components/Shared/Header'
// import Searcher from './components/Searcher/Searcher'
// import Contact from './components/Routes/Contact'
// import Profile from './components/Header/IconNav/Profile'
// import Search from './components/Header/IconNav/Search'
// import HeaderLinks from './components/Header/HeaderLinks'
// import Accommodations from './components/Header/LinksNav/Accommodations'
// import Flights from './components/Header/LinksNav/Flights'
// import Packages from './components/Header/LinksNav/Packages'
// import RentalCar from './components/Header/LinksNav/RentalCar'
// import ToursActivities from './components/Header/LinksNav/ToursActivities'
// import AirportTaxis from './components/Header/LinksNav/AirportTaxis'
// import VolunteerSupport from './components/Header/LinksNav/VolunteerSupport'

// <Route exact="exact" path='/'>
//     <Header/>
//     <HeaderLinks/>
//     <Searcher/>
//     <Main/>
//     <Footer/>
// </Route>

// <Route exact="exact" path='/menu'>
//     <Hamburger/>
// </Route>
// <Route exact="exact" path='/contact'>
//     <Contact/>
// </Route>
// <Route exact="exact" path='/profile'>
//     <Profile/>
// </Route>
// <Route exact="exact" path='/search'>
//     <Search/>
// </Route>

// <Route exact="exact" path='/accommodations'>
//     <Accommodations/>
// </Route>
//
// <Route exact="exact" path='/flights'>
//     <Flights/>
// </Route>
//
// <Route exact="exact" path='/packages'>
//     <Packages/>
// </Route>
//
// <Route exact="exact" path='/rental-car'>
//     <RentalCar/>
// </Route>
//
// <Route exact="exact" path='/tours-activities'>
//     <ToursActivities/>
// </Route>
//
// <Route exact="exact" path='/airport-taxis'>
//     <AirportTaxis/>
// </Route>
//
// <Route exact="exact" path='/volunteer-support'>
//     <VolunteerSupport/>
// </Route>
