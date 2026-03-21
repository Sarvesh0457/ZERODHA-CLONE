import React from 'react';

function Hero() {
    return ( 
        <div className='cotainer'>
            <div className='row p-5 mt-5 text-center'>
                <h1>Pricing</h1>
                <p className='text-muted mt-3'>Free equity investments and flat &#8377;20 traday and F&O trades</p>
            </div>
            <div className='row p-5 m-5 border-top text-center'>
                <div className='col-4'>
                    <img src='./Media/Images/pricingEquity.svg' alt='pricing Equity' style={{width:"60%"}}></img>
                    <h4>Free Equity delivery</h4>
                    <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE),<br /> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='./Media/Images/intradayTrades.svg' alt='pricing Equity' style={{width:"60%"}}></img>
                    <h4>Intraday and F&O trades</h4>
                    <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per<br /> executed order on intraday trades across<br /> equity, currency, and commodity trades.<br /> Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src='./Media/Images/pricingEquity.svg' alt='pricing Equity' style={{width:"60%"}}></img>
                    <h4>Free direct MF</h4>
                    <p className='text-muted mt-3'>All direct mutual fund investments are<br /> absolutely free — ₹ 0 commissions & DP<br /> charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;