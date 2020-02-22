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
        height: '11vw',
        width: '11vw',
        margin: "0 10px 10px 10px"
    },
    p: {
        width: '100vw',
        marginLeft: '4px',
        fontWeight: 'bold'
    },
    middleP: {
        width: '100vw',
        fontWeight: 'bold',
        marginLeft: '5px',
        textAlign: 'left',
        fontSize: '16px'
    },
    imgDiv: {
        padding: '1vh 1vw 0 1vw',
        display: 'flex',
        width: '20vw',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    imgP: {
        marginTop: '-2vh',
        fontSize: "13px"
    },
    middle: {
        display: 'flex',
        flexDirection: "column"
    },
    deals: {
        display: 'flex',
        border: '1px #979797 solid',
        width: '50vw'
    },
    place: {
        display: 'flex',
        border: '1px #979797 solid',
        borderLeft: 'none',
        width: '100vw'
    },
    left: {
        width: '17vw'
    },
    right: {
        width: '75vw',
        marginTop: '5vh'
    },
    button: {
        width: '25vw',
        height: '8vh',
        color: "white",
        backgroundColor: 'rgb(3, 159, 226)',
        borderRadius: '4px',
    },
    dealtext: {
        margin: "18px 0 6px 0",
        fontSize: "14px"
    },
    h4: {
        fontSize: "14px"
    }
}
const Hotels = () => (
    <div>
        <Header />
        <Search />
        <p style={style.p}>Still looking for the perfect accommodation?</p>
        <div style={style.imgCont}>
            <div style={style.imgDiv}>
                <img style={style.img} src={pic1} />
                <h4 style={style.h4}>Barcelona</h4>
                <p style={style.imgP}>2,930 properties including 2,031 homes</p>
            </div>
            <div style={style.imgDiv}>
                <img style={style.img} src={pic2} />
                <h4 style={style.h4}>Madrid</h4>
                <p style={style.imgP}>3,562 properties including 3,12 homes</p>
            </div>
            <div style={style.imgDiv}>
                <img style={style.img} src={pic3} />
                <h4 style={style.h4}>Lisbon</h4>
                <p style={style.imgP}>2,768 properties including 1,345 homes</p>
            </div>
            <div style={style.imgDiv}>
                <img style={style.img} src={pic4} />
                <h4 style={style.h4}>Rome</h4>
                <p style={style.imgP}>3,456 properties including 2,130 homes</p>
            </div>
        </div>

        <div style={style.middle}>

            <div style={style.place}>
                <div style={style.left}>
                    <p style={style.middleP}>Early 2020 deals on accommodation</p>
                    <img style={style.imgM} src={money} />
                </div>
                <div style={style.right}>
                    <p style={style.dealtext}>Start now with 20% off!</p>
                    <button style={style.button}>View Deals</button>
                </div>
            </div>

            <div style={style.place}>
                <div style={style.left}>
                    <p style={style.middleP}>List your place on Booking.com</p>
                    <img style={style.imgM} src={empire} />
                </div>
                <div style={style.right}>
                    <p style={style.dealtext}>Earn easy money while you travel!</p>
                    <button style={style.button}>Learn More</button>
                </div>
            </div>
        </div>

        <p style={style.middleP}>Connect with other travellers</p>
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
