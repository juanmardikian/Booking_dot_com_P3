import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = 'http://bookingdotcom.herokuapp.com/api/sign-in'

export default function UserLogin(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logIn = async (event) => {
        event.preventDefault();
        // console.log(username,password);
        let response = await axios({
            url: `${apiUrl}`,
            method: 'POST',
            data: { username: username, password: password }
        })
        console.log(response);
        const tempUser = response.data.user.userName;
        const token = `Bearer ${response.data.token}`
        window.localStorage.setItem(tempUser,token);
    }

    const updateUsername = (event) => {
        let temp = event.target.value;
        console.log(temp);
        setUsername(temp);
    }

    const updatePassword = (event) => {
        let temp = event.target.value;
        console.log(temp)
        setPassword(temp);
    }

    return (
        <div>
            <h2>Sign in</h2>
            <p>You can sign in using your Booking.com account to access our services.</p>
            <form>
                <h4>Username</h4>
                <input type="text" onChange={updateUsername}></input>
                <h4>Booking.com Password</h4>
                <input type="password" onChange={updatePassword}></input>
                <div>
                    <input type="submit" onClick={logIn}></input>
                </div>

            </form>
        </div>
    )
}