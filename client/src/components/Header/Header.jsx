import React from 'react'
import { NavLink } from 'react-router-dom';
import iconPhone from '../../images/iconPhone.png'
import iconProfile from '../../images/iconProfile.png'
import iconSearch from '../../images/iconSearch.png'
import hamburger from '../../images/hamburger.png'

export default function Header() {
    return (
        <div className="header">
            <div className='title'><span className='Booking'>Booking</span><span className='com'>.com</span></div>
            <div className="icons">
                <NavLink exact to="/contact"> <div><img className="iconPhone" alt='' src={iconPhone}></img></div></NavLink>
                <NavLink exact to="/profile"><div><img className="iconProfile" alt='' src={iconProfile}></img></div></NavLink>
                <NavLink exact to="/search">  <div><img className="iconSearch" alt='' src={iconSearch}></img></div></NavLink>
                <NavLink exact to="/menu"><div><img className="hamburger" alt='' src={hamburger}></img></div></NavLink>
            </div>


        </div>
    )
}
