import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AuthContext from "./Context/AuthContext";

function Navbar() {
  const {user, setUser} = useContext(AuthContext);
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  const Logout = async () => {
    try{
      await axios.post("/logout");

      removeCookie("token", { path: "/" });
      setUser(null); // clear context user
      navigate("/");
    }catch (err){
      console.log("Logout Failed: ",err)
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-1">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "25%" }}
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {!user ? (<li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Signup">
                  Signup/Login
                </Link>
              </li>) : 
              (<button type="button" className="nav-link active" onClick={Logout}>
                  Logout
                </button>)}
              <li className="nav-item">
                <Link className="nav-link active" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                  <a href={process.env.REACT_APP_DASHBOARD} className="nav-link active">
                    Dashboard
                  </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
