import React from 'react'

export default function Subscribe() {
    return (
        <div className='subscribe'>
        <h3 className='subscribeText'>Subscribe for discounts of up to 50%</h3>
            <form className="searchForm">
                <input className='enterEmail' autoFocus value='' placeholder="your@email.here" />
                <button type='submit' className='subscribeButton'>Subscribe</button>
            </form>
            
        </div>
    )
}
