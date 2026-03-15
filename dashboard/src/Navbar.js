import React from "react";
import Menu from "./components/Menu";

function Navbar() {
    return ( 
        <>
            <nav
            className="navbar navbar-expand-lg border-bottom"
            style={{ backgroundColor: "#FFF" }}
            >
                <div className="p-1">
                    <a className="navbar-brand" href="http://localhost:3000">
                        <img
                            src="media/images/logo.svg"
                            alt="Zerodha Logo"
                            style={{ width: "25%" }}
                        ></img>
                    </a>
                </div>
                <div className="topbar-container">
                    <div className="indices-container">
                        <div className="nifty">
                        <p className="index">NIFTY 50</p>
                        <p className="index-points">{100.2} </p>
                        <p className="percent"> -2.5% </p>
                        </div>
                        <div className="sensex">
                        <p className="index">SENSEX</p>
                        <p className="index-points">{100.2}</p>
                        <p className="percent"> -1.3% </p>
                        </div>
                    </div>

                    <Menu />
                </div>
            </nav>
        </>
     );
}

export default Navbar;