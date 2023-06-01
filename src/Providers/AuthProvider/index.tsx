import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface IAuthContext {}

const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: FC<PropsWithChildren<IAuthContext>> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {}, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
