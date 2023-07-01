import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const getUserLogin = async () => {
    const user = await axios.get("http://localhost:8080/api/user-login", {
      withCredentials: true,
    });
    setUser(user.data.username);
  };
  useEffect(() => {
    getUserLogin();
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
