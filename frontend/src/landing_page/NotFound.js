import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-4 my-3">
      <div className="row text-center">
        <h1 className="mt-5">Error: 404 Page Not Found</h1>
        <p>The page you are looking for doesn't exist.</p>
        <Link to="/"><button
          style={{ width: "15%", margin: "0 auto" }}
          type="button"
          className="btn btn-primary p-2 fs-5 mb-5"
        >
          Go Home
        </button></Link>
      </div>
    </div>
  );
}

export default NotFound;
