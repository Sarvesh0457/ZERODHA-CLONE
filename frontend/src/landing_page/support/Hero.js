import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <section className='container-fluid' id='SupportHero'>
            <div className='p-3' id='supportWrapper'>
                <h5>Support Portal</h5>
                <Link to='/Abc'>Track Tickets</Link>
            </div>
            <div className='row p-5' id='afterWrapper'>
                <div className='col-6 p-3'>
                    <h2>Search for an answer or browse help topics to create a ticket</h2>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected..'></input><br />
                    <Link to='/Abc'>Track account opening</Link>
                    <Link to='/Abc'>Track segment activation</Link>
                    <Link to='/Abc'>Intraday</Link><br />
                    <Link to='/Abc'>margins</Link>
                    <Link to='/Abc'>Kite user manual</Link>
                </div>
                <div className='col-6 p-3'>
                    <h2>Featured</h2>
                    <ol>
                        <li><Link to='/Abc'>Current Takeovers and Delisting - January 2026</Link><br /></li>
                        <li><Link to='/Abc'>Latest Intraday leverages - MIS & CO</Link></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;