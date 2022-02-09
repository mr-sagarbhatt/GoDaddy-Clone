import { createContext, useContext, useState, useEffect } from "react";
import { getToken } from "../utils/local-storage";
import { getLoggedUser } from "../services/AccountService";

// *********** CONTEXT ***********
const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // *********** CURRENT USER ***********
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = getToken();
    setUserToken(token);
  }, []);

  // *********** SET CURRENT USER WHEN USER LOGGED IN ***********
  const setLoggedUSer = async () => {
    if (userToken !== "") {
      //  * GET LOGGED USER *
      const userData = await getLoggedUser();
      //  * SET LOGGED USER *
      // await setLoggedUSer(userData.data);
      setUser(userData.data);
    } else {
      setUser({});
    }
  };

  // *********** GET CURRENT USER WHEN USER LOGGED IN ***********
  useEffect(() => {
    setLoggedUSer();
  }, [userToken]);

  const value = {
    user,
    setUser,
    setUserToken,
    setLoggedUSer,
  };

  // *********** CONTEXT PROVIDER :: provide current user to app ***********
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuthContext };
