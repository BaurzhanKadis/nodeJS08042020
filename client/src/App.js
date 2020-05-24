import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { useAuth } from "./hooks/auth.hook";

import Auth from "./page/Auth";
import Primary from "./page/Primary";

import './index.css';


function App() {
  const { login, logout, token, userId, userNickName } = useAuth();
  const isAuthenticated = !!token;
  // const isAuthenticated = false;
  return (
    <AuthContext.Provider value={{ login, logout, token, userId, userNickName }}>
      <div className="wrapper">
        <Route exact path={[ "/login", "/register"]} component={Auth} />
        <Route exact path={[ "/", "/primary"]} component={Primary} />
        {isAuthenticated ? <Redirect to="/primary" /> : null }
      </div>
    </AuthContext.Provider>
  );
}

export default App;
