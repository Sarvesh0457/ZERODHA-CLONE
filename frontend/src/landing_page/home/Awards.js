import React from 'react';

function Awards() {
    return ( 
        <div className='container my-3 py-3'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='./Media/Images/largestBroker.svg' alt='Largest-Broker' ></img>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul className='d-grid row-gap-3'>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className='d-grid row-gap-3'>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='Media/Images/pressLogos.png' alt='Press-Logos' style={{width:"90%"}} ></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;