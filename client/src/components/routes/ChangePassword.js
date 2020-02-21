import React, { useState } from 'react';
import axios from 'axios';
import WebFont from 'webfontloader';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { useHistory } from 'react-router-dom'
// const apiUrl = 'http://bookingdotcom.herokuapp.com/api';
import APIUrl from '../Shared/APIUrl';

WebFont.load({
    google: {
        families: ['Baloo', 'sans-serif']
    }
})

const style = {
    body: {
        marginLeft: '10px',
        fontFamily: 'Baloo',
        textAlign: 'center'
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
    }
}


export default function ChangePassword(props) {
    console.log(props.match.params.userid);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let history = useHistory();

    const updateEmail = (event) => {
        let temp = event.target.value;
        console.log(temp);
        setEmail(temp);
    }

    const updatePassword = (event) => {
        let temp = event.target.value;
        console.log(temp)
        setPassword(temp);
    }

    const updateConfirmPassword = (event) => {
        let temp = event.target.value;
        console.log(temp)
        setConfirmPassword(temp);
    }

    const changePassword = async (event) => {
        try {
            if (password !== confirmPassword) {
                alert('Passwords do not match');
            }
            event.preventDefault();
            let response = await axios({
                url: `${APIUrl}/change-password`,
                method: 'POST',
                data: { username: email, password: password }
            })
            console.log(response);
            if (response.status === 200) {
                // console.log(history())
                return history.push(`/profile/${props.match.params.userid}`);
            }
        } catch (error) {
            console.log(error);
            console.log('Invalid email or password');
            // display invalid username or password
        }
    }

    return (
        <div>
            <Header />
            <div style={style.body}>
                <p>Please type in your new password</p>

                <form>
                    <h4 style={style.h4}>Email</h4>
                    <input type="text" onChange={updateEmail} style={style.form}></input>
                    <h4 style={style.h4}>New Password</h4>
                    <input type="password" onChange={updatePassword} style={style.form}></input>
                    <h4 style={style.h4}>Confirm Password</h4>
                    <input type="password" onChange={updateConfirmPassword} style={style.form}></input>

                    <div>
                        <button type="submit" onClick={changePassword} style={style.bigbluebutton}>Change Password</button>
                    </div>

                </form>

            </div>
            <Footer />
        </div>
    )
}