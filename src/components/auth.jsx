import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default Auth;
