import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginForm  from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

import './Auth.css';

class Auth extends Component {
  render() {
    return (
      <section className="auth">
      <div className="auth__content">
        <Switch>
          <Route exact path={["/", "/login"]} component={LoginForm}/>
          <Route exact path="/register" component={RegisterForm}/>
        </Switch>
      </div>
    </section>
    );
  }
}

export default Auth;