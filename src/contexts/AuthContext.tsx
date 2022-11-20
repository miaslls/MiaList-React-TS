import { createContext, useState, useEffect } from "react";

import IAuthorization from "../interfaces/Authorization";
import AuthorizationService from "../services/AuthorizationService";

const AuthContext = createContext<any>(null);

function AuthContextProvider(props: any) {
  const [auth, setAuth] = useState<IAuthorization | null>(null);

  useEffect(() => {
    if (auth) {
      AuthorizationService.SaveToLocalStorage(auth);
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
