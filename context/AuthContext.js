import { createContext, useEffect, useState } from "react";
import localForage, { getItem } from "localforage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(false);

  const loginLocalForageHandler = () => {
    return localForage.setItem("authJfVimeo", authToken);
  };

  const logoutLocalStorageHandler = () => {
    return localForage.setItem("authJfVimeo", authToken);
  };

  const getItemFromForage = async () => {
    const data = await localForage.getItem("authJfVimeo");
    setAuthToken(data);
  };

  useEffect(() => {
    getItemFromForage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        loginLocalForageHandler,
        logoutLocalStorageHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
