import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { useAuth } from "./hooks/auth.hook";

import Auth from "./page/Auth";
import Primary from "./page/Primary";
import NavBar from './components/NavBar';
import StockMarket from './page/StockMarket';
import LikesKill from './page/LikesKill';

import './index.css';


function App() {
  const { login, logout, token, userId, userNickName } = useAuth();
  const isAuthenticated = !!token;
  // const isAuthenticated = false;
  return (
    <AuthContext.Provider value={{ login, logout, token, userId, userNickName }}>
      <div className="wrapper">
        <NavBar />
        <Route exact path={[ "/login", "/register"]} component={Auth} />
        <Route exact path={[ "/", "/primary"]} component={Primary} />
        <Route exact path="/stock-market" component={StockMarket}/>
        <Route exact path="/likes-kill" component={LikesKill} />
        {isAuthenticated ? <Redirect to="/primary" /> : null }
      </div>
    </AuthContext.Provider>
  );
}

export default App;
