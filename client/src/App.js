import React from "react";
import { Route } from "react-router-dom";

import Auth from "./page/Auth";
import Primary from "./page/Primary";

import './index.css';

function App() {
  return (
    <div className="wrapper">
      <Route exact path={["/", "/login", "/register"]} component={Auth} />
      <Route exact path="/primary" component={Primary} />
    </div>
  );
}

export default App;
