import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = 'http://bookingdotcom.herokuapp.com/api/sign-up'

export default function UserCreate(props) {

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
        <div>
            <h2>Create your account</h2>
            <p>Create an account to use Booking.com services easily.</p>
            <form>
                <h4>Email</h4>
                <input type="text" onChange={updateEmail}></input>
                <h4>Create Password</h4>
                <input type="password" onChange={updatePassword}></input>
                <h4>Confirm Password</h4>
                <input type="password" onChange={updateConfirmPassword}></input>

                <div>
                    <input type="submit" onClick={createUser}></input>
                </div>

            </form>
        </div>
    )
}