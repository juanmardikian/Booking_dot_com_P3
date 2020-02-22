import React from 'react';
import { Route } from 'react-router-dom'
import Hotels from './Components/Routes/Hotels'
import Hamburger from './Components/Routes/Hamburger'
import CarRental from './Components/Routes/CarRental'
import Flights from './Components/Routes/Flights'
import Contact from './Components/Routes/Contact'
import HelpCenter from './Components/Routes/HelpCenter'
import Profile from './Components/Routes/Profile'
import UserLogin from './Components/Routes/userLogin'
import { withRouter, Redirect } from 'react-router'
import CreateUser from './Components/Routes/userCreate'
import DeleteUser from './Components/Routes/userDelete'
import ChangePassword from './Components/Routes/ChangePassword'

function App(props) {

    // |ROUTE COMPONENTS          | ROUTE CREATED |  COMPONENT BUILT |  Conditional Rendering  |
    // |                          |  YES  OR  NO  |  YES    OR   NO  |  YES      OR        NO  |
    // |--------------------------|---------------|------------------|-------------------------|
    // |Accomidations or "hotels" |  YES          |              NO  |                     NO  |
    // |Hamburger                 |  YES          |              NO  |                     NO  |
    // |Login                     |  YES          |              NO  |                     NO  |
    // |Dashboard                 |               |              NO  |                     NO  |
    // |Contact                   |               |              NO  |                     NO  |
    // |Volunteer                 |               |              NO  |                     NO  |
    // |CarRental                 |  YES          |  YES             |                     NO  |
    // |Flights                   |  YES          |  YES             |                     NO  |

    return (
        <div className="App">


            <Route exact path='/'>
                <Hotels />
            </Route>

            <Route exact path='/car'>
                <CarRental />
            </Route>

            <Route exact path='/flights'>
                <Flights />
            </Route>

            <Route exact path='/menu'>
                <Hamburger />
            </Route>

            <Route exact path='/contact'>
                <Contact />
            </Route>

            <Route exact path='/customer'>
                <HelpCenter />
            </Route>

            <Route exact path='/profile/:userid' render={(props) => <Profile {...props} />} />

            <Route exact path='/login'>
                <UserLogin />
            </Route>

            <Route exact path='/createuser'>
                <CreateUser />
            </Route>

            <Route exact path='/deleteaccount/:userid' render={(props) => <DeleteUser {...props} />} />

            <Route exact path='/changepassword/:userid' render={(props) => <ChangePassword {...props} />} />

            <Route exact path='/packages' render={() => (
                <Redirect to='/' />
            )} />
            
            <Route exact path='/tour' render={() => (
                <Redirect to='/' />
            )} />

        </div>)
}

export default withRouter(App);