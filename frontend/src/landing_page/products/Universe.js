import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container text-center">
      <div className="row">
        <h3>The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row p-5">
        <div className="col-4 p-3">
            <img src="./media/images/zerodhaFundhouse.png" alt="brand Logo" style={{width:"50%"}}></img>
            <p className="p-3 text-muted" style={{opacity:"0.8", fontSize:"14px"}}>
              Our asset management venture <br />
              that is creating simple and transparent index<br />
              funds to help you save for your goals.
            </p>
            <img src="./media/images/streakLogo.png" alt="brand Logo" style={{width:"50%"}}></img>
            <p className="p-3 text-muted" style={{opacity:"0.8", fontSize:"14px"}}>
              Systematic trading platform<br />
              that allows you to create and backtest<br />
              strategies without coding. 
            </p>
        </div>
        <div className="col-4 p-3">
            <img src="./media/images/sensibullLogo.svg" alt="brand Logo" style={{width:"50%"}}></img>
            <p className="p-3 text-muted" style={{opacity:"0.8", fontSize:"14px"}}>
              Options trading platform that lets you<br />
              create strategies, analyze positions, and examine<br />
              data points like open interest, FII/DII, and more.
            </p>
            <img src="./media/images/smallcaseLogo.png" alt="brand Logo" style={{width:"50%"}} className="mt-4"></img>
            <p className="p-3 text-muted" style={{opacity:"0.8", fontSize:"14px"}}>
              Thematic investing platform<br />
              that helps you invest in diversified<br />
              baskets of stocks on ETFs.
            </p>
        </div>
        <div className="col-4 p-3">
            <img src="./media/images/goldenpiLogo.png" alt="brand Logo" style={{width:"50%"}}></img>
            <p className="p-3 text-muted" style={{opacity:"0.8", fontSize:"14px"}}>
              Investment research platform<br />
              that offers detailed insights on stocks,<br />
              sectors, supply chains, and more.
            </p>
            <img src="./media/images/dittoLogo.png" alt="brand Logo" style={{width:"50%"}}></img>
            <p className="p-3 text-muted" style={{opacity:"0.8", fontSize:"14px"}}>
              Personalized advice on life<br />
              and health insurance. No spam<br />
              and no mis-selling.
            </p>
        </div>
      </div>
      <div className="row p-3 mb-3">
        <Link to="/signup">
          <button
            style={{ width: "15%", margin: "0 auto", backgroundColor:"rgb(56, 126, 209)"}}
            type="button"
            className="btn btn-primary p-2 fs-5 mb-5"
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
