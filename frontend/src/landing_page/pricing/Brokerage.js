import React from 'react';
import { Link } from 'react-router-dom';

function Brokerage() {
    return ( 
        <div className='contianer'>
            <div className='row p-3 m-5 text-center border-top'>
                <div className='col-8 p-4'> 
                    <Link to='/Abc' style={{textDecoration:"none"}}><h3 className='fs-4'>Brokerage calculator</h3></Link>    
                    <ul style={{textAlign:"left", lineHeight:"2.2"}} className='text-muted'>
                        <li>Call & Trade and RMS auto-spareoff:Addition charges of &#8377;50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail</li>
                        <li>Physical copies of contract notes, if required, shall be charged &#8377;20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or &#8377;100per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or &#8377;200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debt balance, any order place will be charged &#8377;40 per executed instead of &#8377;20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <Link to='/Abc' style={{textDecoration:"none"}}><h3 className='fs-4'>List of charges</h3></Link>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;