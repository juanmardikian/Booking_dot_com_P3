import React from 'react'
import Header2 from '../Header/Header2'
import Footer from '../Footer/Footer'
import contact from '../../images/contact.png'
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
            <Header2 />
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
