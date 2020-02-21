import React, { useState } from 'react';
import axios from 'axios';
import WebFont from 'webfontloader';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { useHistory } from 'react-router-dom'
const apiUrl = 'http://bookingdotcom.herokuapp.com/api/user';

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
    deletelink: {
        textDecoration: 'none',
        color: "black"
    }
}


export default function DeleteUser(props) {
    console.log(props.match.params.userid);
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    let history = useHistory();

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

    const deleteUser = async (event) => {
        try {
            if (password!==confirmPassword){
                alert('Passwords do not match');
            }
            event.preventDefault();
            let response = await axios({
                url: `${apiUrl}/${props.match.params.userid}`,
                method: 'DELETE',
                data: { id: props.match.params.userid }
            })
            console.log(response);
            if (response.status === 204) {
                // console.log(history())
                return history.push('/');
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
                <p>Are you sure you want to delete your account?</p>

                <form>
                    <h4 style={style.h4}>Your Password</h4>
                    <input type="password" onChange={updatePassword} style={style.form}></input>
                    <h4 style={style.h4}>Confirm Password</h4>
                    <input type="password" onChange={updateConfirmPassword} style={style.form}></input>

                    <div>
                        <button type="submit" onClick={deleteUser} style={style.bigbluebutton}>Delete Account</button>
                    </div>

                </form>

            </div>
            <Footer />
        </div>
    )
}