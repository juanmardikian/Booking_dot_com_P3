import React from 'react'
import WebFont from 'webfontloader'
import NavLinks from './NavLinks'
import NavIcons from './NavIcons'
import arrowBack from '../../Images/Header/arrowBack.png'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
WebFont.load({
    google: {
        families: ['Baloo', 'sans-serif']
    }
})

const style = {
    header: {
        display: 'flex',
        width: '100vw',
        justifyContent: 'space-between',
        height: '60px',
        backgroundColor: 'rgb(0, 53, 128)'
    },
    title: {
        margin: '18px 0 auto 9px'
    },
    booking: {
        width: '68px',
        height: '28px',
        fontFamily: 'Baloo',
        fontSize: '20px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: 'white'
    },
    com: {
        width: '39px',
        height: '28px',
        fontFamily: 'Baloo',
        fontSize: '20px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: 'rgb(3, 159, 226)'
    },
    arrowBack: {
        margin: '15px',
        width: '26px',
        height: '26px'
    },
    backButton: {
        backgroundColor: 'rgb(0, 53, 128)',
        border: 'none'
    }
}


export default function Header(props) {
    const { back } = props
    let history = useHistory()
    return (
        back ?
        <div>
            <div style={style.header}>
                <div style={style.title}>
                    <div>
                        <button style={style.backButton}
                            type='button'
                            onClick={() => history.goBack()
                            }>
                            <img style={style.arrowBack} alt='' src={arrowBack}/>
                        </button>
                    </div>
                </div>
                <NavIcons/>
            </div>

            <NavLinks/>
        </div>
        :
        <div>
            <div style={style.header}>
                <div style={style.title}>
                    <div>
                        <span style={style.booking}>Booking</span>
                        <span style={style.com}>.com</span>
                    </div>
                </div>
                <NavIcons/>
            </div>

            <NavLinks/>
        </div>


    )
}
