import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
// const apiUrl = 'http://bookingdotcom.herokuapp.com/api';
import APIUrl from '../Shared/APIUrl';

const style = {
    body: {
        width: "70vw",
        margin: "0 auto",
        textAlign: "left"
    },
    searchform: {
        width: "70vw",
        height: "34vh",
        minHeight: "150px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(244,178,63)"
    },
    searchcontainer: {
        width: "70vw",
        height: "6vh",
        minHeight: "25px",
        display: "flex",
        margin: ".5vh 1vw",
        padding: "0",
        justifyContent: "space-between"
    },
    location: {
        width: "68vw",
        border: "1px solid grey",
        margin: "1vh 1vw",
        marginTop: '1vh',
        height: "90%",
        minHeight: "20px",
        display: "flex",
        
        justifyContent: "center",
        padding: "0"
    },
    checkin: {
        width: "32vw",
        border: "1px solid grey",
        margin: "1vh 0 1vh 1vw",
        height: "90%",
        minHeight: "20px",
        display: "flex",
        padding: "0",
        justifyContent: "center"
    },
    checkout: {
        width: "32vw",
        border: "1px solid grey",
        margin: "1vh 1vw 1vh 0",
        height: "90%",
        minHeight: "20px",
        display: "flex",
        padding: "0",
        justifyContent: "center"
    },
    adults: {
        width: "21vw",
        border: "1px solid grey",
        margin: "1vh 0 1vh 1vw",
        height: "90%",
        minHeight: "20px",
        display: "flex",
        padding: "0",
        justifyContent: "center"
    },
    children: {
        width: "21vw",
        border: "1px solid grey",
        margin: "1vh 0",
        height: "90%",
        minHeight: "20px",
        display: "flex",
        padding: "0",
        justifyContent: "center"
    },
    rooms: {
        width: "21vw",
        border: "1px solid grey",
        margin: "1vh 1vw 1vh 0",
        height: "90%",
        minHeight: "20px",
        display: "flex",
        padding: "0",
        justifyContent: "center"
    },
    purpose: {
        width: "68vw",
        border: "1px solid grey",
        height: "90%",
        minHeight: "20px",
        display: "flex",
        justifyContent: "center",
        padding: "0",
        margin: "1vh 1vw"
    },
    searchbar: {
        width: "68vw",
        height: "5vh",
        minHeight: "30px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        boder: "1 solid grey",
        padding: "0",
        margin: "1vh 1vw",
        backgroundColor: "rgb(64,158,218)"
    },
    textformat: {
        margin: "2px"
    },
    formRow: {
        width: "60vw",
        display: 'flex',
        justifyContent: "center"
    }

}

const Search = props => {

    const [cityId, setCityId] = useState(null);
    const [cityData, setCityData] = useState('');
    const [hotelData, setHotelData] = useState('');
    const [volunteerData, setVolunteerData] = useState('');
    const [flightData, setFlightData] = useState('');
    const [carRentalData, setCarRentalData] = useState('');
    const [carData,setCarData] = useState('');

    // retrieveData returns a cityId for searched city
    const retrieveData = async (cityName) => {
        try {
            let response = await axios.get(`${APIUrl}/locations/${cityName}`);
            console.log(response.data.cityId);
            setCityId(response.data.cityId);
            return response.data;

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        window.scrollTo(0,0);
        // retrieves city data for searched city
        const getCityData = async () => {
            try {
                let response = await axios.get(`${APIUrl}/location/${cityId}`)
                setCityData(response.data.location);
                // console.log(response.data.location);
            } catch (error) {
                console.log(error);
            }
        }
        // gets all hotels for city searched
        const getHotels = async () => {
            try {
                let response = await axios.get(`${APIUrl}/location/${cityId}/hotels`);
                setHotelData(response.data.hotels);
            } catch (error) {
                console.log(error);
            }
        }

        const getVolunteerOps = async () => {
            try {
                let response = await axios.get(`${APIUrl}/location/${cityId}/volunteers`);
                setVolunteerData(response.data.volunteers);
            } catch (error) {
                console.log(error);
            }
        }

        const getFlights = async () => {
            try {
                let response = await axios.get(`${APIUrl}/location/${cityId}/flights`);
                setFlightData(response.data.flights);
            } catch (error) {
                console.log(error);
            }
        }

        const getCarRentals = async () => {
            try {
                let response = await axios.get(`${APIUrl}/location/${cityId}/cars`);
                setCarRentalData(response.data.cars);
            } catch (error) {
                console.log(error);
            }
        }

        const getCars = async () => {
            try {
                // console.log(carRentalData)
                let response = await axios.get(`${APIUrl}/location/${cityId}/cars/${carRentalData[0].id}`)
                console.log(response.data);
                setCarData(response.data);

            } catch (error) {
                console.log(error);
            }
        }

        if (cityId != null) {
            getCityData();
            getHotels();
            getVolunteerOps();
            getFlights();
            getCarRentals();
        }
    }, [cityId]);

    // formik for forms
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
        }
    })

    return (
        <div style={style.body}>
            <h2 style={style.textformat}>Where to next?</h2>
            <p style={style.textformat}>Find your next adventure</p>
            <div style={style.searchform}>
                <form onSubmit={formik.handleSubmit}>

                    <div style={style.searchcontainer}>
                        <label htmlFor="location">
                        <input
                            id='location'
                            name='location'
                            type='text'
                            placeholder='Location'
                            onChange={formik.handleChange}
                            value={formik.values.location}
                            style={style.location}
                        />
                        </label>
                    </div>

                    <div style={style.searchcontainer}>
                        <label htmlFor="checkIn">
                        <input
                            id='checkIn'
                            name='checkIn'
                            type='text'
                            placeholder='Check In Date'
                            onChange={formik.handleChange}
                            value={formik.values.checkIn}
                            style={style.checkin}

                        />
                        </label>
                        <label htmlFor="checkOut">
                        <input
                            id='checkOut'
                            name='checkOut'
                            type='text'
                            placeholder='Check Out Date'
                            onChange={formik.handleChange}
                            value={formik.values.checkOut}
                            style={style.checkout}
                        />
                        </label>
                    </div>

                    <div style={style.searchcontainer}>
                        <label htmlFor="adults">
                        <input
                            id='adukts'
                            name='adults'
                            type='text'
                            placeholder='Adults'
                            onChange={formik.handleChange}
                            value={formik.values.adults}
                            style={style.adults}
                        />
                        </label>
                        <label htmlFor="children">
                        <input
                            id='children'
                            name='children'
                            type='text'
                            placeholder='Children'
                            onChange={formik.handleChange}
                            value={formik.values.children}
                            style={style.children}
                        />
                        </label>
                        <label htmlFor="rooms">
                        <input
                            id='rooms'
                            name='rooms'
                            type='text'
                            placeholder='Room'
                            onChange={formik.handleChange}
                            value={formik.values.rooms}
                            style={style.rooms}
                        />
                        </label>
                    </div>

                    <div style={style.searchcontainer}>
                        <label htmlFor="purpose">
                        <input
                            id='purpose'
                            name='purpose'
                            type='text'
                            placeholder='Purpose'
                            onChange={formik.handleChange}
                            value={formik.values.purpose}
                            style={style.purpose}
                        />
                        </label>
                    </div> 
                    <div style={style.searchcontainer}>
                        <button type="submit" style={style.searchbar}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Search
