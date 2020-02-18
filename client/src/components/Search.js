import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
const apiUrl = 'http://localhost:3001/api';

async function retrieveData (cityName){
    try{
        let response = await axios.get(`${apiUrl}/locations/${cityName}`)
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
    }

}

const Search = props => {

    const formik = useFormik({
        initialValues: {
            location: '',
            checkIn: '',
            checkOut: '',
            adults: '',
            children: '',
            rooms: '',
            purpose: ''
        },
        onSubmit: values => {
            let temp = retrieveData(values.location);
            console.log(values)
            console.log(temp);
        }
    })

    return (
        <div>
            <p>Find your next adventure</p>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <span>
                        <label htmlFor="location">Location</label>
                        <input
                            id='location'
                            name='location'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.location}
                        />
                    </span>
                    <span>
                        <label htmlFor="checkIn">Check In</label>
                        <input
                            id='checkIn'
                            name='checkIn'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.checkIn}
                        />
                        <label htmlFor="checkOut">Check Out</label>
                        <input
                            id='checkOut'
                            name='checkOut'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.checkOut}
                        />
                    </span>
                    <span>
                        <label htmlFor="adults">Adults</label>
                        <input
                            id='adukts'
                            name='adults'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.adults}
                        />
                        <label htmlFor="children">Children</label>
                        <input
                            id='children'
                            name='children'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.children}
                        />
                        <label htmlFor="rooms">Rooms</label>
                        <input
                            id='rooms'
                            name='rooms'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.rooms}
                        />
                    </span>
                    <span>
                        <label htmlFor="purpose">Purpose</label>
                        <input
                            id='purpose'
                            name='purpose'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.purpose}
                        />
                    </span>
                    <span>
                        <button type="submit">Submit</button>
                    </span>
                </form>
            </div>
        </div>
    )

}

export default Search
