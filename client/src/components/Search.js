import React from 'react'
import { useFormik } from 'formik'

const Search = props => {

    const formik = useFormik({
        initialValues: {
            location: '',
            checkIn: '',
            checkOut: '',
            adults: '',
            childern: '',
            reason: ''
        },
        onSubmit: values => console.log(values)
    })

    return (
        <div>
            <p>This is my search component</p>
            <form onSubmit={formik.handleSubmit}>
                <input
                    id='location'
                    name='location'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    />
                <input
                    id='checkIn'
                    name='checkIn'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.checkIn}
                    />
                <input
                    id='adults'
                    name='adults'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.adults}
                    />
                <input
                    id='children'
                    name='children'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.children}
                    />
                <input
                    id='reason'
                    name='reason'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.reason}
                    />
                <button type="submit">Submit</button>
            </form>
        </div>
        )

}

export default Search
