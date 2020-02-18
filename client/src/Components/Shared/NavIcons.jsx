import React from 'react'
import { NavLink } from 'react-router-dom'
import iconPhone from '../../Images/Header/iconPhone.png'
import iconProfile from '../../Images/Header/iconProfile.png'
import iconSearch from '../../Images/Header/iconSearch.png'
import hamburger from '../../Images/Header/hamburger.png'

const style = {
    iconContainer: {
        display: 'flex',
        marginTop: '8px'
    },
    icon: {
        width: '26px',
        height: '26px'
    },
    iconH: {
        width: '30px',
        height: '25px'
    }
}

export default function NavIcons() {
    return (
        <div style={style.iconContainer}>
            <NavLink exact to="/contact"> <div><img style={style.icon} alt='' src={iconPhone}></img></div></NavLink>
            <NavLink exact to="/profile"><div><img style={style.icon} alt='' src={iconProfile}></img></div></NavLink>
            <NavLink exact to="/search">  <div><img style={style.icon} alt='' src={iconSearch}></img></div></NavLink>
            <NavLink exact to="/menu"><div><img style={style.iconH} alt='' src={hamburger}></img></div></NavLink>
        </div>
    )
}
