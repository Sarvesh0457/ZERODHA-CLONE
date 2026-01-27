import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='text-center p-5 mt-5 mb-5'>
                <h2>Zerodha Products</h2>
                <h5 className='mb-4 mt-2'>Sleek, modern, and intuitive trading platforms</h5>
                <p style={{fontSize:"1.1em"}}>Check out our <a href='abc.com' style={{textDecoration:"none"}}>investment offerings&#8594;</a></p>
            </div>
        </div>
     );
}

export default Hero;