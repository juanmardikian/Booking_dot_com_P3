import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import contact from '../../Images/contact.png'
export default function Contact() {
    window.scrollTo(0, 0)

    const style = {
        parentContainer: {

            fontFamily: 'Helvetica',
            fontSize: '14px',
            letterSpacing: '0.82px',
            color: '#030000',
            backgroundColor: 'white',
            height: '60px',
            border: 'solid 1px rgba(0, 0, 0, 0.25)'
        }
    }



    return (
        <div>
            <Header back='true' />
            <div style={style.parentContainer}>
                <p style={{ display: 'flex', justifyContent: 'center', paddingTop: '18px' }}>24/7 Customer Service</p>
                <p style={{ display: 'flex', justifyContent: 'center', padding: '0' }}>Call us at anytime</p>
           </div>
           <div style={{backgroundColor: 'white'}}>
           <img src={contact} style={{width:'100%'}}/>
           </div>

                <Footer />

        </div>
    )
}
