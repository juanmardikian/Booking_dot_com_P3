import React from 'react'
import { NavLink } from 'react-router-dom';

export default function HeaderLinks() {
    return (
       
            <div className='headerLinks'>
                <NavLink exact to="/accommodations"><span>Accommodations</span></NavLink>
                <NavLink exact to="/flights"><span>Flights</span></NavLink>
                <NavLink exact to="/packages"><span>Packages</span></NavLink>
                <NavLink exact to="/rental-car"><span>Rental Car</span></NavLink>
                <NavLink exact to="/tours-activities"><span>Tours & Activities</span></NavLink>
                <NavLink exact to="/airport-taxis"><span>Airport Taxis</span></NavLink>
                <NavLink exact to="/volunteer-support"><span>Volunteer & Support</span></NavLink>
                
            
            
            </div>
            )
        }
