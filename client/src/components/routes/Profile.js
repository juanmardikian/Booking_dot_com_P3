import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import UserDetails from '../Routes/userDetails';

export default function Profile(props) {
    return (
        <div>
            <Header />
            <UserDetails userId={props.match.params.userid}/>
            <Footer />
        </div>
    )
}