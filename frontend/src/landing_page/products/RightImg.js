import React from 'react';
import { Link } from 'react-router-dom';

function RightImg({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mb-4'>
                        <Link to='/Abc' style={{marginLeft:"80px", textDecoration:"none"}}>Kite Connect &#8594;</Link>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageURL} alt='right' style={{height:"80%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default RightImg;