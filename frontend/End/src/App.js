import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import { BrowserRouter, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import HomePage from './page/home';
import Login from "./page/login";
import NotFound from "./page/notFound";
import { getIsLoggedIn } from './utils/tokenService';


const requireLogin = (to, from, next) => {
  console.log('came tocheck auth')
  if (to.meta.auth) {
    console.log('1');
    if (getIsLoggedIn()) {
      console.log('2');
      next();
    }
    console.log('3');
    next.redirect('/login');
  } else {
    console.log('4');
    next();
  }
};

const AppContainer = styled.div`
    margin: 1rem
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;



const App = () => (
    <AppContainer>
        <BrowserRouter>
    <GuardProvider guards={[requireLogin]} loading="Loading" error={NotFound}>
      <Switch>
        <GuardedRoute path="/login" exact component={Login} />
        <GuardedRoute path="/" exact component={HomePage} meta={{ auth: true }} />
        <GuardedRoute path="/home" exact component={HomePage} meta={{ auth: true }} />
        {/* <GuardedRoute path="/about" exact component={About} meta={{ auth: true }} /> */}
        <GuardedRoute path="*" component={NotFound} />
      </Switch>
    </GuardProvider>
  </BrowserRouter>
    </AppContainer>
);

export default hot(module)(App);