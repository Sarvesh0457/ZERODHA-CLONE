import React from 'react';

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
                        {tryDemo === '' ? null : <a href={tryDemo} style={{textDecoration:"none"}}>{tryDemo} &#8594;</a>}
                        {learnMore === '' ? null : <a href={learnMore} style={{marginLeft:"80px", textDecoration:"none"}}>{learnMore} &#8594;</a>}
                    </div>
                    <div>
                        <a href={googlePlay}> <img src='./media/images/googlePlayBadge.svg' alt='Play Store'></img> </a>
                        <a href={appStore} style={{marginLeft:"10px", textDecoration:"none"}}> <img src='./media/images/appstoreBadge.svg' alt='App Store'></img> </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftImg;