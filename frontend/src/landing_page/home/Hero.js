import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-4 my-3'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero-Image' className='mb-3' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <Link to="/Signup"><button style={{width:"15%", margin:"0 auto"}} type='button' className='btn btn-primary p-2 fs-5 mb-5'>Sign up Now</button></Link>
            </div>
        </div>
     );
}

export default Hero;