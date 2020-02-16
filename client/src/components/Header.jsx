import React from 'react'
import iconPhone from '../images/iconPhone.png'
import iconProfile from '../images/iconProfile.png'
import iconSearch from '../images/iconSearch.png'

export default function Header() {
    return (
        <div className="header">
<div className='title'><span className='Booking'>Booking</span><span className='com'>.com</span></div>
<div className="icons">
    <div><img className="iconPhone" alt='' src={iconPhone}></img></div>
    <div><img className="iconProfile" alt='' src={iconProfile}></img></div>
    <div><img className="iconSearch" alt='' src={iconSearch}></img></div>
</div>
       

        </div>
    )
}
