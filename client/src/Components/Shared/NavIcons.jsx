import react from 'react'
import { iconPhone, iconProfile, iconSearch, hamburger } from '../Images/Header'

const style = {
    iconContainer: {
        display: 'flex',
        marginTop: '8px'
    },
    icon: {
        width: '26px',
        height: '26px'
    }
    iconH: {
        width: '30px'
        height: '25px'
    }
}

export default function NavIcons() {
    return (
        <div style={style.iconContainer}>
            <NavLink exact to="/contact"> <div><img style="style.icon" alt='' src={iconPhone}></img></div></NavLink>
            <NavLink exact to="/profile"><div><img style="style.icon" alt='' src={iconProfile}></img></div></NavLink>
            <NavLink exact to="/search">  <div><img style="style.icon" alt='' src={iconSearch}></img></div></NavLink>
            <NavLink exact to="/menu"><div><img style="style.iconH" alt='' src={hamburger}></img></div></NavLink>
        </div>
    )
}
