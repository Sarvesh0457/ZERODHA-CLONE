import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return ( 
        <div className='container p-5 my-4'>
            <div className='row'>
                <div className='col-6 '>
                    <img src='Media/Images/education.svg' alt='Varsity' style={{width:"85%"}}></img>
                </div>
                <div className='col-6'>
                    <h1 className='mb-5'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advance trading.</p>
                    <Link to='/Abc'>Versity &#8594;</Link>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for your market related queries</p>
                    <Link to='/Abc'>TradingQ&A &#8594;</Link>
                </div>
            </div>
        </div>
     );
}

export default Education;