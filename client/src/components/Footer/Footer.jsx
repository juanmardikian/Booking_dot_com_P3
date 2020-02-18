import React from 'react'
import Subscribe from './Subscribe'
import ListYourProperty from './ListYourProperty'
import ContactFooter from './ContactFooter'
import FooterLinks from './FooterLinks'
export default function Footer() {
    return (
        <div className='footer'>
            <Subscribe />
            <ListYourProperty />
            <ContactFooter />
            <FooterLinks />

        </div>
    )
}
