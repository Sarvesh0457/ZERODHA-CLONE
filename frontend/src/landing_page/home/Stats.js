import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-3'>
                <div className='col-6 p-3'>
                    <h1 className='mb-3'>Trust with confidence</h1>
                    <h2 className='fs-3'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3 crore customers trust Zerodha with &#x20B9;3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-3'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-3'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investmentsin 30+fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-3'>Do better with money</h2>
                    <p className='text-muted'>With inititives like Nudge and Kill Switch, we don't just facilate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-3'>
                    <img src='Media/Images/ecosystem.png' alt='Ecosystem' style={{width:"90%"}}></img>
                    <div className='text-center'>
                        {/* <a href='abc.com' style={{textDecoration:"none"}}>Explore our products &#8594;</a> */}
                        <Link to='/Abc' className='mx-5'>Explore our products &#8594;</Link>
                        <Link to='/Abc'>Try kite demo &#8594;</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;