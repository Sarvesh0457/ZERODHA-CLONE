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

function HomePage() {

    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
        const { data } = await axios.post(
            "http://localhost:3002/verify",
            {},
            { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        return status
            ? toast(`Hello ${user}`, {
                position: "top-right",
            })
            : (removeCookie("token"));
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
            {username ? <h4>Welcome <span>{username}</span></h4> : null}
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