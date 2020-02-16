import React from 'react'
import { NavLink } from 'react-router-dom';
export default function HeaderLinks() {
    return (
       
            <div className='headerLinks'>
                <NavLink exact to="/accommodations"><h4>Accommodations</h4></NavLink>
                <NavLink exact to="/accommodations"><h4>Flights</h4></NavLink>
                <NavLink exact to="/accommodations"><h4>Packages</h4></NavLink>
                <NavLink exact to="/accommodations"><h4>Rental Car</h4></NavLink>
                <NavLink exact to="/accommodations"><h4>Tours & Activities</h4></NavLink>
            
            </div>
            )
        }
