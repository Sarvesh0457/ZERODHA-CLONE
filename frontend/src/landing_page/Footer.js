import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-top" style={{backgroundColor:"rgb(250,250,250"}}>
    <div className="container mt-5" style={{width:"100%"}}>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src="media/images/logo.svg"
            alt="Zerodha-Logo"
            style={{ width: "45%" }}
          ></img>
          <p>
            &copy; 2010 - 2026, Zerodha Broking Ltd. <br />
            All rights reserved.
          </p>
          <div className="text-muted p-3">
            <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="text-muted p-3 border-top" style={{width:"70%"}}>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="col-2">
          <h3>Account</h3>
          <Link to='/Abc'>Open demat account</Link>
          <br />
          <Link to='/Abc'>Minor demat account</Link>
          <br />
          <Link to='/Abc'>NRI demat account</Link>
          <br />
          <Link to='/Abc'>Commodity</Link>
          <br />
          <Link to='/Abc'>Dematerialisation</Link>
          <br />
          <Link to='/Abc'>Fund transfer</Link>
          <br />
          <Link to='/Abc'>MTF</Link>
          <br />
          <Link to='/Abc'>Referral program</Link>
          <br />
        </div>
        <div className="col-2">
          <h3>Support</h3>
          <Link to='/Abc'>Contact us</Link>
          <br />
          <Link to='/Abc'>Support portal</Link>
          <br />
          <Link to='/Abc'>How to file a complaint?</Link>
          <br />
          <Link to='/Abc'>Status of your complaints</Link>
          <br />
          <Link to='/Abc'>Bulletin</Link>
          <br />
          <Link to='/Abc'>Circular</Link>
          <br />
          <Link to='/Abc'>Z-Connect blog</Link>
          <br />
          <Link to='/Abc'>Downloads</Link>
          <br />
        </div>
        <div className="col-2">
          <h3>Company</h3>
          <Link to='/Abc'>About</Link>
          <br />
          <Link to='/Abc'>Philosophy</Link>
          <br />
          <Link to='/Abc'>Press & media</Link>
          <br />
          <Link to='/Abc'>Careers</Link>
          <br />
          <Link to='/Abc'>Zerodha Cares (CSR)</Link>
          <br />
          <Link to='/Abc'>Zerodha.tech</Link>
          <br />
          <Link to='/Abc'>Open source</Link>
          <br />
        </div>
        <div className="col-2">
          <h3>Quick links</h3>
          <Link to='/Abc'>Upcoming IPOs</Link>
          <br />
          <Link to='/Abc'>Brokerage charges</Link>
          <br />
          <Link to='/Abc'>Market holidays</Link>
          <br />
          <Link to='/Abc'>Economic calendar</Link>
          <br />
          <Link to='/Abc'>ZCalculators</Link>
          <br />
          <Link to='/Abc'>Markets</Link>
          <br />
          <Link to='/Abc'>Sectors</Link>
          <br />
        </div>
      </div>
      <div className="mt-5 text-muted" style={{fontSize:"12px"}}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Registered
          Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
          Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to complaints@zerodha.com, for DP related to
          dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p>
          
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p>
          India's largest broker based on networth as per NSE. NSE broker
          factsheet
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
        <p>
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
