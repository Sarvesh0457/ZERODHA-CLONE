import React from 'react';
import { Link } from 'react-router-dom';

function LeftImg({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL} alt='left'></img>
                </div>
                <div className='col-6'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mb-4'>
                        {tryDemo === '' ? null : <Link to='/Abc'>{tryDemo} &#8594;</Link>}
                        {learnMore === '' ? null : <Link to='/Abc' style={{marginLeft:"80px", textDecoration:"none"}}>{learnMore} &#8594;</Link>}
                    </div>
                    <div>
                        <Link to='/Abc'> <img src='./Media/Images/googlePlayBadge.svg' alt='Play Store'></img> </Link>
                        <Link to='/Abc' style={{marginLeft:"10px", textDecoration:"none"}}> <img src='./Media/Images/appstoreBadge.svg' alt='App Store'></img> </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftImg;