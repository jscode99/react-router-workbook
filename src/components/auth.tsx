import { useContext, useState, createContext } from "react";

const AuthContext: any = createContext(null);

export const AuthProvide = ({ children }: any) => {
  const [user, setUser] = useState(null);

  const login = (user: any) => {
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
