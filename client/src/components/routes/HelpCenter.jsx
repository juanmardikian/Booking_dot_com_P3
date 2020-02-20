import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { Link } from 'react-router-dom'
import Icon from '../../Images/helpCenter.png'
import helpList from '../../Images/helpList.png'
import contactPhone from '../../Images/contactPhone.png'
export default function HelpCenter() {
    window.scrollTo(0, 0)
    const style = {
        parentContainer: {
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'bolder',
            alignItems: 'center',
            fontFamily: 'Helvetica',
            fontSize: '16px',
            letterSpacing: '0.82px',
            color: '#030000',
            backgroundColor: 'white',
            height: '100px',
            border: 'solid 1px rgba(0, 0, 0, 0.25)'
        }
    }

    return (
        <div>
            <Header back='true'/>

            <div style={{ ...style.parentContainer, height: '50px' }} >

                <p >Help Center</p>

            </div>
            <div style={{ ...style.parentContainer, height: '150px', flexDirection: 'column', textAlign: 'center', fontWeight: 'normal' }}>
                <img src={Icon} style={{ width: '80px' }}></img> <p> We couldn't load any bookings. Have a question?</p>
                <p style={{ padding: '10px', fontWeight: 'bolder', color: 'rgb(3, 159, 226)' }}>Ask a question</p>
            </div>
            <div style={{ ...style.parentContainer, height: '70px' }} >
                <img src={contactPhone} style={{ width: '30px' }}></img><Link to='/contact'><button type='submit' style={{
                    width: ' 140px', height: '26px', fontFamily: 'Baloo',
                    fontSize: '16px',
                    textAlign: 'center',
                    color: 'rgb(3, 159, 226)',
                    outlineStyle: 'none',
                    borderRadius: '4px',
                    backgroundColor: 'white',
                    border: 'solid 1px  rgb(3, 159, 226)'
                }}>CONTACT US</button></Link>

            </div>
          <div style={{backgroundColor:'white'}}>
          <img src={helpList} style={{width:'100%'}}/>
          </div>




            <Footer />
        </div >
    )
}
