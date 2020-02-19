import React from 'react'
import Header2 from '../Header/Header2'
import usa from '../../images/usaFlag.png'
import usd from '../../images/usd.png'
import profile from '../../images/SignInCreateProfile.png'
import bookings from '../../images/bookings.png'
import viewed from '../../images/viewed.png'
import stillLooking from '../../images/stillLooking.png'
import myLists from '../../images/myLists.png'
import communities from '../../images/communities.png'
import properties from '../../images/properties.png'
import hosts from '../../images/hosts.png'
import reviews from '../../images/reviews.png'
import customerService from '../../images/customerService.png'
import safety from '../../images/safety.png'
import careers from '../../images/careers.png'
import press from '../../images/press.png'
import affiliate from '../../images/affiliate.png'
import iphone from '../../images/iphone.png'
import Footer from '../Footer/Footer'

export default function Hamburger() {

    const style = {
        parentContainer: {
            fontFamily: 'Helvetica',
            fontSize: '14px',
            fontWeight: 'bold',
            letterSpacing: '0.82px',
            color: '#030000',
            backgroundColor: 'white'
        },
        image: {
            display: 'flex',
            float: 'right',
            width: '24px',
            height: '24px',
            objectFit: 'contain',
            margin: '-5px 5px 0 0',

        },
        imageUSD: {
            display: 'flex',
            float: 'right',
            width: '30px',
            height: '30xp',
            objectFit: 'contain',
            margin: '-5px 3px 0 0',

        },
        StillLooking: {
            display: 'flex',
            float: 'right',
            width: '30px',
            height: '30px',
            objectFit: 'contain',
            margin: '-17px 3px 0 0',

        },
        subHeading: {
            padding: '10px',
            marginTop: '14px'
        },
        listItem: {
            padding: '10px 0 0 0',
            marginTop: '14px',
            fontWeight: 'normal'
        }
    }




    return (
        <div style={style.parentContainer}>
            <Header2 />
            <div style={style.subHeading}>
                SETTINGS
                <ul>
                    <li style={style.listItem}>Change Language<img src={usa} style={style.image} /></li>
                    <li style={style.listItem}>Change Currency<img src={usd} style={style.imageUSD} /></li>
                </ul>
            </div>
            <div style={style.subHeading}>
                PROFILE
                <ul>
                    <li style={style.listItem}>Sign In or Create Profile<img src={profile} style={style.image} /></li>
                    <li style={style.listItem}>Bookings<img src={bookings} style={style.image} /></li>
                    <li style={style.listItem}>Recently Viewed<img src={viewed} style={style.image} /></li>
                    <li style={style.listItem}>Still looking for the perfect <br />accommodations?<img src={stillLooking} style={style.StillLooking} /></li>
                    <li style={style.listItem}>My Lists<img src={myLists} style={style.image} /></li>
                    <li style={style.listItem}>Travel Communities<img src={communities} style={style.image} /></li>
                    <li style={style.listItem}>List Your Property<img src={properties} style={style.image} /></li>
                    <li style={style.listItem}>Invite Hosts<img src={hosts} style={style.image} /></li>
                    <li style={style.listItem}>My Reviews<img src={reviews} style={style.image} /></li>
                </ul>
            </div>

            <div style={style.subHeading}>
                USEFUL LINKS
                <ul>
                    <li style={style.listItem}>Customer Service Help<img src={customerService} style={style.image} /></li>
                    <li style={style.listItem}>Safety Resource Center <img src={safety} style={style.image} /></li>
                    <li style={style.listItem}>Home<img src={hosts} style={style.image} /></li>
                    <li style={style.listItem}>Careers<img src={careers} style={style.image} /></li>
                    <li style={style.listItem}>Press Center<img src={press} style={style.image} /></li>
                    <li style={style.listItem}>Become an Affiliate<img src={affiliate} style={style.image} /></li>
                    <li style={style.listItem}>Download the iPhone App<img src={iphone} style={style.image} /></li>
                </ul>
            </div>

            <Footer />
        </div>
    )
}
