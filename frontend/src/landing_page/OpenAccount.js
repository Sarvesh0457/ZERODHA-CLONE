import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-4 my-3">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>Modern platform and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
        <Link to="/signup"><button
          style={{ width: "15%", margin: "0 auto" }}
          type="button"
          className="btn btn-primary p-2 fs-5 mb-5"
        >
          Sign up Now
        </button></Link>
      </div>
    </div>
  );
}

export default OpenAccount;
