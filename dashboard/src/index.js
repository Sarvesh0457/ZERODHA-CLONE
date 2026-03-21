import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import axios from "axios";

import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

  axios.defaults.baseURL = "/";
  axios.defaults.withCredentials = true;

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>
);
