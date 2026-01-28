import React from 'react';
import { Link } from 'react-router-dom';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-3 m-3'>
                <h1 className='fs-2 fw-normal'>To create a ticket, select a relevant topic</h1>
                <div className='col-4 p-4 my-4'>
                    <h4> <i className="fa-solid fa-circle-plus"></i> Account Opening</h4>
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Online Account Opening</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Offline Account Opening</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Company, Partnership and HUF Account</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Opening</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>NRI Account Opening</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Charges at Zerodha</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Getting started</Link><br />
                </div>
                <div className='col-4 p-4 my-4'>
                    <h4> <i class="fa-solid fa-user"></i> Your Zerodha Account</h4>
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Login Credentials</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Account modification and Segment Addition</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>DP ID and bank details</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Your Profile</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Transfer and conversion of shares</Link><br />
                </div>
                <div className='col-4 p-4 my-4'>
                    <h4> <i class="fa-solid fa-chart-column"></i> Your Zeerodha Account</h4>
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Margin/leverage, Product and Order types</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Kite Web and Mobile</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Trading FAQs</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Corporate Actions</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Sentinel</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Kite API</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Pi and other platforms</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Stockreports+</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>GTT</Link><br />
                </div>
                <div className='col-4 p-4 my-4'>
                    <h4> <i class="fa-regular fa-credit-card"></i> Funds</h4>
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Adding Funds</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Fund Withdrawal</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>eMandates</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Adding Bank Accounts</Link><br />
                </div>
                <div className='col-4 p-4 my-4'>
                    <h4> <i class="fa-solid fa-circle-notch"></i> Console</h4>
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Reports</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Ledger</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Portfolio</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>60 Day Challenge</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>IPO</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Referal Program</Link><br />
                </div>
                <div className='col-4 p-4 my-4'>
                    <h4> <i class="fa-regular fa-circle"></i> Coin</h4>
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Understanding Mutual Funds</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>About Coin</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Buying and Selling through Coin</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Staring and SIP</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Managing your Portfolio</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Coin App</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Moving to Coin</Link><br />
                    <Link to='/Abc' style={{textDecoration:"none", lineHeight:"2.3"}}>Government Securities</Link><br />
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;