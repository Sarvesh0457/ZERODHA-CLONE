import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

function HomePage() {

    const { user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    // const [username, setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
            try {
                const { data } = await axios.post(
                    "http://localhost:3002/verify",
                    {},
                    { withCredentials: true }
                );
                const { status, user } = data;
                setUser(user);
                // setUsername(user);
                if (status) {
                    toast(`Hello ${user}`, { position: "top-right" });
                } else {
                    removeCookie("token");
                }

            }catch (error) {
                setUser(null);
                }
        };
        verifyCookie();
    }, [cookies, navigate, removeCookie]);
    const Logout = async() => {
        await axios.post(
            "http://localhost:3002/logout",
            {},
            { withCredentials: true }
        );
        removeCookie("token", { path: "/" });
        navigate("/");
    };

    return ( 
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <button onClick={Logout}>LOGOUT</button>

            {/* flash message */}
            <ToastContainer />
        </>
     );
}

export default HomePage;