import React from 'react'
import WebFont from 'webfontloader'
WebFont.load({
  google: {
    families: ['Baloo', 'sans-serif']
  }
})

const style = {
    header: {},
    title: {
        margin: '10px 0 auto 9px'
    },
    booking: {
        width: '68px',
        height: '28px',
        fontFamily: 'Baloo',
        fontSize: '10px',
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
    }
}
export default function Header() {
    return (<div className="header">

        <div style={style.title}>
            <span style={style.booking}>Booking</span>//use
            <div style="exampleStyleSeeAbove">
                <span className='com'>.com</span>//use
                <div style="exampleStyleSeeAbove"></div>

                <NavIcons/>
            </div>
            }
