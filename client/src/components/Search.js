import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
const apiUrl = 'http://bookingdotcom.herokuapp.com/api';

const Search = props => {

    const [cityId, setCityId] = useState(null);
    const [cityData, setCityData] = useState('');

    const retrieveData = async (cityName) => {
        try {
            let response = await axios.get(`${apiUrl}/locations/${cityName}`)
            console.log(response.data.cityId);
            setCityId(response.data.cityId);
            return response.data;

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        const getCityData = async () => {
            try {
                let response = await axios.get(`${apiUrl}/location/${cityId}`)
                setCityData(response.data.location);
                console.log(response.data.location);
            } catch (error) {
                console.log(error);
            }
        }
        if (cityId != null) {
            getCityData();
        }


    }, [cityId]);

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
            retrieveData(values.location);
            // console.log(values);
            console.log(cityId);
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
