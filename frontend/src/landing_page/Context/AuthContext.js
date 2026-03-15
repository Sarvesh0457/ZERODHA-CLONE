import { createContext, useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
      axios.post("http://localhost:3002/verify", {}, { withCredentials: true })
        .then(res => setUser(res.data.user))
        .catch(() => setUser(null));
    }, []);


  return (
    <AuthContext.Provider value={{ user, setUser }}>
        {/* props children */}
      {children} 
    </AuthContext.Provider>
  );
};

export default AuthContext;