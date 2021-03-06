import React from 'react'
import { NavLink } from 'react-router-dom'
import iconPhone from '../../Images/Header/iconPhone.png'
import iconProfile from '../../Images/Header/iconProfile.png'
import iconSearch from '../../Images/Header/iconSearch.png'
import hamburger from '../../Images/Header/hamburger.png'

const style = {
    iconContainer: {
        display: 'flex',
        marginTop: '2vh'
    },
    icon: {
        width: '26px',
        margin: "0 1.5vw",
        height: '26px'
    },
    iconH: {
        width: '30px',
        height: '25px',
        marginRight: '3vw'
    }
}

export default function NavIcons(props) {
    return (
        <div style={style.iconContainer}>
            <NavLink exact to="/contact"> <div><img style={style.icon} alt='' src={iconPhone}></img></div></NavLink>
            <NavLink exact to="/login"><div><img style={style.icon} alt='' src={iconProfile}></img></div></NavLink>
            <NavLink exact to="/flights">  <div><img style={style.icon} alt='' src={iconSearch}></img></div></NavLink>
            <NavLink exact to="/menu"><div><img style={style.iconH} alt='' src={hamburger}></img></div></NavLink>
        </div>
    )
}
