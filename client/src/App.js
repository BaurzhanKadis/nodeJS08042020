import React, {useState,useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { useAuth } from "./hooks/auth.hook";

import Auth from "./page/Auth";
import Primary from "./page/Primary";
import NavBar from './components/NavBar';
import BottumMenu from './components/Bottum-menu';
import Loaded from './components/Loaded';
import StockMarket from './page/StockMarket';
import LikesKill from './page/LikesKill';
import BestMoment from './page/BestMoment';
import Box from './page/Box';
import OnlineSchool from './page/OnlineSchool';
import Challenge from './page/Challenge';
import Diary from './page/Diary';

import './index.css';

function App() {
  const { login, logout, token, userId, userNickName, menuActive, setMenuActive, menuHandler } = useAuth();
  const isAuthenticated = !!token;
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoad(false), 5000);
  });

  return (
    <AuthContext.Provider value={{ login, logout, token, userId, userNickName, setMenuActive, menuActive, menuHandler }}>
      {load ? <Loaded /> : null}
      <div className={`wrapper ${menuActive ? "overflowHidden" : ""}`}>
        <NavBar />
        <Route exact path={[ "/login", "/register"]} component={Auth} />
        <Route exact path={[ "/", "/primary"]} component={Primary} />
        <Route exact path="/stock-market" component={StockMarket}/>
        <Route exact path="/likes-kill" component={LikesKill} />
        <Route exact path="/best-moment" component={BestMoment} />
        <Route exact path="/box" component={Box} />
        <Route exact path="/online-school" component={OnlineSchool} />
        <Route exact path="/challenge" component={Challenge} />
        <Route exact path="/diary" component={Diary} />
        {isAuthenticated ? <Redirect to="/primary" /> : null }
        <BottumMenu />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
