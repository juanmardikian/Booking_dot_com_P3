import React, { useState } from 'react';
import axios from 'axios';
import WebFont from 'webfontloader';
const apiUrl = 'http://bookingdotcom.herokuapp.com/api/sign-in'

WebFont.load({
    google: {
        families: ['Baloo', 'sans-serif']
    }
})

const style = {
    body: {
        color: 'black',
        fontFamily: 'Baloo' 
    },
    form: {
        height: '4vh',
        minHeight: '30px',
        width: '21vw',
        minWidth: '100px',
        border: '1px solid black',
        margin: '0',
        borderRadius: '4px'
    },
    h4: {
        margin: '4px 0 0 0'
    },
    bigbluebutton: {
        color: 'white',
        fontSize: '20px',
        marginTop: '15px',
        width: '21vw',
        height: '7vh', 
        backgroundColor: 'rgb(0,102,186)'
    }
}

export default function UserLogin(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logIn = async (event) => {
        try {
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
            window.localStorage.setItem(tempUser, token);
            // redirect to <UserDetails userId={response.data.user} />

        } catch (error) {
            console.log(error);
            console.log('Invalid username or password');
            // display invalid username or password
        }
    }

    const updateUsername = (event) => {
        let temp = event.target.value.toLowerCase();
        console.log(temp);
        setUsername(temp);
    }

    const updatePassword = (event) => {
        let temp = event.target.value;
        console.log(temp)
        setPassword(temp);
    }

    return (
        <div style={style.body}>
            <h2>Sign in</h2>
            <p>You can sign in using your Booking.com account to access our services.</p>
            <form>
                <h4 style={style.h4}>Email</h4>
                <input type="text" onChange={updateUsername} style={style.form}></input>
                <h4 style={style.h4}>Booking.com Password</h4>
                <input type="password" onChange={updatePassword} style={style.form}></input>
                <div>
                    <button type="submit" onClick={logIn} style={style.bigbluebutton}>Sign-In</button>
                </div>

            </form>
        </div>
    )
}