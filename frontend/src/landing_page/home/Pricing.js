import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return ( 
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-5'>Unbeatable pricing</h1>
                    <p>We pionnered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <Link to='/Abc'>See pricing &#8594;</Link>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center p-4'>
                        <div className='col border p-4'>
                            <h1 className='mb-3'>&#8377;0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className='col border p-4'>
                            <h1 className='mb-3'>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;