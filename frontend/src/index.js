import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import { CookiesProvider } from "react-cookie"; 
import axios from 'axios';

import Navbar from './landing_page/Navbar';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/Login';
import About from './landing_page/about/AboutPage';
import Product from './landing_page/products/ProductsPage';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Abc from './landing_page/Abc';

import { AuthProvider } from './landing_page/Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

  axios.defaults.baseURL = process.env.REACT_APP_BACKEND;
  axios.defaults.withCredentials = true;

root.render(
  <CookiesProvider>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/support' element={<Support />} />
          <Route path='/abc' element={<Abc />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </CookiesProvider>
);
