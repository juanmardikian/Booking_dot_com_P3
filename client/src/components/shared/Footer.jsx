import React from 'react'


const style = {
    footer: {
        backgroundColor: 'rgb(0, 53, 128)',
        height: '300px'
    },
    subscribe: {
        backgroundColor: '#001b42'
    },
    subscribeText: {
        height: '18px',
        fontFamily: 'Helvetica',
        color: 'white',
        textAlign: 'center',
        padding: '8px'
    },
    searchForm: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '18px'
    },
    enterEmail: {
        padding: '8px',
        width: '220px',
        fontFamily: 'Helvetica',
        fontStyle: 'italic'
    },
    subscribeButton: {
        width: '100px',
        height: '35px',
        fontFamily: 'Baloo',
        fontSize: '15px',
        borderRadius: '7px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgb(3, 159, 226)',
        padding: '4px',
        outlineStyle: 'none',
        borderRadius: '4px',
        border: 'solid 2px rgb(3, 159, 226)'
    },
    listYourPropertyDiv: {
        display: 'flex',
        justifyContent: 'center',
        borderTop: 'solid 1px rgb(3, 159, 226)',
        textAlign: 'center',
        padding: '10px'
    },
    listYourPropertyButton: {
        width: '140px',
        height: '26px',
        fontFamily: 'Baloo',
        fontSize: '12px',
        textAlign: 'center',
        color: 'rgb(3, 159, 226)',
        backgroundColor: 'azure',
        outlineStyle: 'none',
        borderRadius: '4px',
        border: 'solid 1px rgb(3, 159, 226)'
    },
    footerLinkDiv1: {
        borderTop: 'solid 1px rgb(3, 159, 226)',
        display: 'flex',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'underline'
    },
    footerLinkDiv2: {
        textAlign: 'center',
        textDecoration: 'underline',
        padding: '10px'
    },
    footerLink: {
        color: 'white',

    },
    copyright: {
        textAlignVertical: "center",
        textAlign: "center",
        color: 'white',
        fontSize: '9px'
     }
}



export default function Footer() {
    return (
        <div style={style.footer}>
            <div style={style.subscribe}>
                <h3 style={style.subscribeText}>Subscribe for discounts of up to 50%</h3>
                <form style={style.searchForm}>
                    <input style={style.enterEmail} autoFocus value='' placeholder="your@email.here" />
                    <button type='submit' style={style.subscribeButton}>Subscribe</button>
                </form>

            </div>
            <div style={style.listYourPropertyDiv}>
                <button type='submit' style={style.listYourPropertyButton}>LIST YOUR PROPERTY</button>
            </div>
            <div style={style.listYourPropertyDiv}>
                <button type='submit' style={style.listYourPropertyButton}>CONTACT US</button>
            </div>
            <div >
                <div style={style.footerLinksDiv1}>
                    <a style={style.footerLink} href='#'>Mobile Version</a><a style={style.footerLink} href='#'>Tablet Version</a>
                </div>

                <div style={style.footerLinksDiv2}>
                    <a style={style.footerLink} href='#'>Terms & Conditions</a><a style={style.footerLink} href='#'>Privacy & Cookies</a>
                </div>
                <div style={style.copyright} >Copyright © 1996-2020 Booking.com </div>
            </div>

        </div>
    )
}