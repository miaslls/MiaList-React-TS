import "./Login.css";

import React from "react";
import { useState, useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import ICredential from "../../interfaces/Credential";
import IAuthorization from "../../interfaces/Authorization";

import AuthService from "../../services/AuthenticationService";

type AuthResponse = IAuthorization | false;

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { auth, setAuth } = useContext(AuthContext);

  const submitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const credential: ICredential = {
      username,
      password,
    };

    // const auth: AuthResponse = await AuthService.Authenticate(credential);

    setAuth(await AuthService.Authenticate(credential));
  };

  return (
    <>
      <div className="login-outer-container">
        <main className="login-inner-container">
          <h1>
            Mia<span>List</span>
          </h1>

          <form
            className="login-form"
            name="login-form"
            onSubmit={(e) => submitLoginForm(e)}
          >
            <input
              className="login-input"
              type="text"
              name="username"
              placeholder="username"
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-button clickable">
              <i className="bi bi-check-circle"></i>
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;
