/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('chat-app')) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};




//code
// import { createContext, useContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const useAuthContext = () => {
//     return useContext(AuthContext);
// }

// export const AuthContextProvider = ({ children }) => {
//     const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-app")) || null);

//     useEffect(() => {
//         localStorage.setItem("chat-user", JSON.stringify(authUser));
//     }, [authUser]);

//     return (
//         <AuthContext.Provider value={{ authUser, setAuthUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }