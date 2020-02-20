import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import Search from '../Shared/Search'
import pic1 from '../../Images/hotels/1.png'
import pic2 from '../../Images/hotels/2.png'
import pic3 from '../../Images/hotels/3.png'
import pic4 from '../../Images/hotels/4.png'
import bottom1 from '../../Images/hotels/bottom1.png'
import bottom2 from '../../Images/hotels/bottom2.png'
import bottom3 from '../../Images/hotels/bottom3.png'
import bottom4 from '../../Images/hotels/bottom4.png'
import money from '../../Images/hotels/money.png'
import empire from '../../Images/hotels/empire.png'

const style = {
    imgCont: {
        display: 'flex',
        justifyContent: 'center'
    },
    img: {
        height: '15vw',
        width: '20vw',
        marginBottom: '-2vh'
    },
    imgM: {
        height: '13vw',
        width: '13vw'
    },
    p: {
        width: '100vw',
        fontWeight: 'bold'
    },
    middleP: {
        width: '50vw',
        textAlign: 'center'
    },
    imgDiv: {
        padding: '1vh 1vw 0 1vw',
        display: 'flex',
        width: '20vw',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    imgP: {
        marginTop: '-2vh'
    },
    middle: {
        display: 'flex',
    },
    deals: {
        display: 'flex',
        border: '.2vh #979797 solid',
        width: '50vw'
    },
    place: {
        display: 'flex',
        border: '.2vh #979797 solid',
        borderLeft: 'none',
        width: '50vw'
    },
    left: {
        width: '25vw'
    },
    right: {
        width: '25vw',
        marginTop: '5vh'
    },
    button: {
        width: '20vw',
        height: '5vw',
        backgroundColor: 'rgb(3, 159, 226)',
        borderRadius: '4px',
    }
}
const Hotels = () => (
    <div>
        <Header />
        <Search />
        <p style={style.p}>Still looking for the perfect accomidation?</p>
        <div style={style.imgCont}>
            <div style={style.imgDiv}>
                <img style={style.img} src={pic1} />
                <h4>Barcelona</h4>
                <p style={style.imgP}>2,930 properties including 2,031 homes</p>
            </div>
            <div style={style.imgDiv}>
                <img style={style.img} src={pic2} />
                <h4>Barcelona</h4>
                <p style={style.imgP}>2,930 properties including 2,031 homes</p>
            </div>
            <div style={style.imgDiv}>
                <img style={style.img} src={pic3} />
                <h4>Barcelona</h4>
                <p style={style.imgP}>2,930 properties including 2,031 homes</p>
            </div>
            <div style={style.imgDiv}>
                <img style={style.img} src={pic4} />
                <h4>Barcelona</h4>
                <p style={style.imgP}>2,930 properties including 2,031 homes</p>
            </div>
        </div>
        <div style={style.middle}>
            <div style={style.deals}>
                <div style={style.left}>
                    <p style={style.middleP}>Early 2020 deals on accomidation</p>
                    <img style={style.imgM} src={money} />
                </div>
                <div style={style.right}>
                    <p>Start now with 20% off!</p>
                    <button style={style.button}>View Deals</button>
                </div>
            </div>
            <div style={style.place}>
                <div style={style.left}>
                    <p style={style.middleP}>List your place on Booking.com</p>
                    <img style={style.imgM} src={empire} />
                </div>
                <div style={style.right}>
                    <p>Start now with 20% off!</p>
                    <button style={style.button}>View Deals</button>
                </div>
            </div>
        </div>
        <div style={style.imgCont}>
            <div style={style.imgDiv}>
                <img style={style.img} src={bottom1} />
                <h4>United States of America</h4>
            </div>
            <div style={style.imgDiv}>
                <img style={style.img} src={bottom2} />
                <h4>Travel Talk</h4>
            </div>
            <div style={style.imgDiv}>
                <img style={style.img} src={bottom3} />
                <h4>Peru</h4>
            </div>
            <div style={style.imgDiv}>
                <img style={style.img} src={bottom4} />
                <h4>Spain</h4>
            </div>
        </div>
        <Footer />
    </div>
)
export default Hotels
