import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='subscribe'>
                <h3 className='subscribeText'>Subscribe for discounts of up to 50%</h3>
                <form className="searchForm">
                    <input className='enterEmail' autoFocus value='' placeholder="your@email.here" />
                    <button type='submit' className='subscribeButton'>Subscribe</button>
                </form>

            </div>
            <div className='LIST-YOUR-PROPERTY-DIV'>
                <button type='submit' className='LIST-YOUR-PROPERTY-Button'>LIST YOUR PROPERTY</button>
            </div>
            <div className='LIST-YOUR-PROPERTY-DIV'>
                <button type='submit' className='LIST-YOUR-PROPERTY-Button'>CONTACT US</button>
            </div>
            <div >
                <div className='FOOTER-LINKS-1'>
                    <a href='#'>Mobile Version</a><a href='#'>Tablet Version</a>
                </div>

                <div className='FOOTER-LINKS-2'>
                    <a href='#'>Terms & Conditions</a><a href='#'>Privacy & Cookies</a>
                </div>
                <div style={{ textAlignVertical: "center", textAlign: "center", color: 'white', fontSize: '9px' }} >Copyright © 1996-2020 Booking.com </div>
            </div>

        </div>
    )
}
