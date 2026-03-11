import React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Abc() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  return (
    <div className="container p-4 my-3">
      <div className="row text-center">
        <h1 className="mt-5">ABC: Test Page</h1>
        <p>This page is maded specifically for testing links</p>
        <button
          style={{ width: "15%", margin: "0 auto" }}
          type="button"
          className="btn btn-primary p-2 fs-5 mb-5"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Abc;