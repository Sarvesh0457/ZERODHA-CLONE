import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios"
import { useCookies } from "react-cookie";
import AuthContext from "../Context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

const Menu = () => {

  const location = useLocation();
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  

    const {user, setUser} = useContext(AuthContext);
    const [cookies, removeCookie] = useCookies([]);
    const Logout = async () => {
          try{
          await axios.post(
              "http://localhost:3002/logout",
              {},
              { withCredentials: true }
          );

          removeCookie("token", { path: "/" });
          setUser(null); // clear context user
          
          window.location.replace("http://localhost:3000")

          }catch (err){
          console.log("Logout Failed: ",err)
          }
      };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus"> 
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
            >
              <p className={location.pathname === "/" ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
            >
              <p className={location.pathname === "/orders" ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
            >
              <p className={location.pathname === "/holdings" ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
            >
              <p className={location.pathname === "/positions" ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
            >
              <p className={location.pathname === "/funds" ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
            >
              <p className={location.pathname === "/apps" ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <ProfileDropdown onLogout={Logout} />
      </div>
    </div>
  );
};

export default Menu;
