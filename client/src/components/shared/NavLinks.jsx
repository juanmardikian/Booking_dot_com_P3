import React from 'react'
import {NavLink} from 'react-router-dom';

const style = {
    linksCont: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        backgroundColor: 'rgb(0, 53, 128)',
        fontFamily: 'Helvetica',
        fontSize: '1.5vh',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'lighter',
        lineHeight: 'normal',
        letterSpacing: '0.05em',
        textAlign: 'center',
        marginBottom: '0',
        padding: '8px 8px 0 8px'
    },
    links: {
        textDecoration: 'none',
        fontSize: '11px',
        marginBottom: "-10px",
        color: 'white'
    }
}

const NavLinks = (props) => (
    <div style={style.linksCont}>
        <NavLink exact to="/" style={style.links}>
            <h4>Accommodations</h4>
        </NavLink>
        <NavLink exact to="/flights" style={style.links}>
            <h4>Flights</h4>
        </NavLink>
        <NavLink exact to="/packages" style={style.links}>
            <h4>Packages</h4>
        </NavLink>
        <NavLink exact to="/car" style={style.links}>
            <h4>Rental Car</h4>
        </NavLink>
        <NavLink exact to="/tour" style={style.links}>
            <h4>Tours & Activities</h4>
        </NavLink>
    </div>)

export default NavLinks
