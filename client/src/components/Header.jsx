import React from 'react'
import iconPhone from '../images/iconPhone.png'
import iconProfile from '../images/iconProfile.png'
import iconSearch from '../images/iconSearch.png'

export default function Header() {
    return (
        <div className="header">

            <span className='Booking title'>Booking</span><span className='com title'>.com</span>

            <img className="icons iconPhone" alt='' src={iconPhone}></img>
            <img className="icons iconProfile" alt='' src={iconProfile}></img>
            <img className="icons iconSearch" alt='' src={iconSearch}></img>

        </div>
    )
}
