import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import WebFont from 'webfontloader';
import UserDetails from './userDetails';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { useHistory, Link } from 'react-router-dom'
const apiUrl = 'http://bookingdotcom.herokuapp.com/api/sign-in';


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
    },
    submitform: {
        textAlign: 'center'
    },
    link: {
        color: "black",
        textDecoration: "none"
    }
}

export default function UserLogin(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
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
            if (response.status === 200) {
                // console.log(history())
                return redirectToProfile(response.data.user.id);
            }


        } catch (error) {
            console.log(error);
            console.log('Invalid username or password');
            // display invalid username or password
        }
    }

    function redirectToProfile(userId){
        history.push(`/profile/${userId}`)
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
            <Header />
            <h2 style={style.submitform}>Sign in</h2>
            <p style={style.submitform}>You can sign in using your Booking.com account to access our services.</p>
            <div style={style.submitform}>
            <form >
                <h4 style={style.h4}>Email</h4>
                <input type="text" onChange={updateUsername} style={style.form}></input>
                <h4 style={style.h4}>Booking.com Password</h4>
                <input type="password" onChange={updatePassword} style={style.form}></input>
                <div>
                    <button type="submit" onClick={logIn} style={style.bigbluebutton}>Sign-In</button>
                </div>
                <div>
                    <Link to="/createuser" style={style.link}><p>Create an account.</p></Link>
                </div>

            </form>
            </div>
            <Footer />
        </div>
    )
}
