import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom'
import WebFont from 'webfontloader';
const apiUrl = 'http://bookingdotcom.herokuapp.com/api/user'

WebFont.load({
    google: {
        families: ['Baloo', 'sans-serif']
    }
})

const style = {
    body: {
        marginLeft: '10px',
        fontFamily: 'Baloo'
    },
    deletelink: {
        textDecoration: 'none',
        color: "black"
    }
}

export default function UserDetails (props) {

    const [userInfo,setUserInfo] = useState('');
    let history = useHistory();

    console.log(props.userId);

    useEffect(()=>{
       const getUserInfo = async () => {
           let response = await axios(`${apiUrl}/${props.userId}`);
           console.log(response.data.user);
           setUserInfo(response.data.user);
       }
           getUserInfo();
       
    },[])

    return userInfo && (
        <div style={style.body}>
            <p>Welcome {userInfo.firstName} {userInfo.middleInit} {userInfo.lastName}</p>
            <p>Username: {userInfo.userName}</p>
            <p>Email: {userInfo.email}</p>
            <p>Home Country: {userInfo.homeCountry}</p>
            <p>Recently Viewed: {userInfo.recentViewed || 'none'}</p>
            <p>Upcoming Trips: {userInfo.upcomingTrips || 'No Upcoming Trips'}</p>
            <h5>Don't like Booking.com? <Link to={`/deleteaccount/${props.userId}`} style={style.deletelink}>Delete your account</Link></h5>
        </div>
    )
}
