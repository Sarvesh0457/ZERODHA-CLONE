import { createContext, useState } from "react";
import React from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
        {/* props children */}
      {children} 
    </AuthContext.Provider>
  );
};

export default AuthContext;