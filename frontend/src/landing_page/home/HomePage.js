import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

function HomePage() {

    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    useEffect(() => {
        const verifyCookie = async () => {
            try {
                const { data } = await axios.post("/verify");
                const { status, user } = data;
                setUser(user);
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
    }, [cookies, navigate, removeCookie, setUser]);

    return ( 
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />

            {/* flash message */}
            <ToastContainer />
        </>
     );
}

export default HomePage;