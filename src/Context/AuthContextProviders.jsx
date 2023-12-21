import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthContextProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const users = "karim@gmail.com";

  const userInfo = { user, users };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProviders;
