import React, { useState } from 'react';
import axios from 'axios';
import WebFont from 'webfontloader';
const apiUrl = 'http://bookingdotcom.herokuapp.com/api/sign-up';

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

export default function CreateUser(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const createUser = async (event) => {
        try {
            if (password!==confirmPassword){
                alert('Passwords do not match');
            }
            event.preventDefault();
            let response = await axios({
                url: `${apiUrl}`,
                method: 'POST',
                data: { email: email, password: password, username: email }
            })
            console.log(response);
            const tempUser = response.data.user.email;
            const token = `Bearer ${response.data.token}`
            window.localStorage.setItem(tempUser, token);
            // redirect to <UserDetails userId={response.data.user} />

        } catch (error) {
            console.log(error);
            console.log('Invalid email or password');
            // display invalid username or password
        }
    }

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

    return (
        <div style={style.body}>
            <h2>Create your account</h2>
            <p>Create an account to use Booking.com services easily.</p>
            <form>
                <h4 style={style.h4}>Email</h4>
                <input type="text" onChange={updateEmail} style={style.form}></input>
                <h4 style={style.h4}>Create Password</h4>
                <input type="password" onChange={updatePassword} style={style.form}></input>
                <h4 style={style.h4}>Confirm Password</h4>
                <input type="password" onChange={updateConfirmPassword} style={style.form}></input>

                <div>
                    <button type="submit" onClick={createUser} style={style.bigbluebutton}>Get Started</button>
                </div>

            </form>
        </div>
    )
}
