import { createContext, useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios.post("/verify", {}, { withCredentials: true })
        .then(res => {
          if (res.data.status) {
            setUser(res.data.user);
          } else {
            setUser(null);
          }
        })
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
        {/* props children */}
      {children} 
    </AuthContext.Provider>
  );
};

export default AuthContext;