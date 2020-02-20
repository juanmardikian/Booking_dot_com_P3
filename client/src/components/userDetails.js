import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiUrl = 'http://bookingdotcom.herokuapp.com/api/user'

export default function UserDetails (props) {

    const [userInfo,setUserInfo] = setState('');

    useEffect(()=>{
       const getUserInfo = async () => {
           let response = await axios(`${apiUrl}/${props.userId}`);
           console.log(response.data.user);
           setUserInfo(response.data.user);
       } 
       getUserInfo();
    },[])

    return userInfo && (
        <div>
            <p>Welcome {userInfo.firstName} {userInfo.middleInit} {userInfo.lastName}</p>
            <p>Username: {userInfo.userName}</p>
            <p>Email: {userInfo.email}</p>
            <p>Home Country: {userInfo.homeCountry}</p>
            <p>Recently Viewed:</p>
            <p>Upcoming Trips:</p>
        </div>
    )
}