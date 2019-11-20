import React from 'react';
import { Route , Switch } from "react-router-dom";

import PrivateRoute from "./Utils/PrivateRoute"
import Dashboard from './Components/Dashboard';
import BioForm from './Components/BioForm';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import WelcomePage from './Components/WelcomePage';
import SnacksAndMeals from './Components/SnacksAndMeals';
import CalculatedPage from './Components/CalculatedPage';
import LandingPage from './Components/LandingPage';
import EditForm from './Components/EditForm';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <PrivateRoute exact path = "/Biometrics" component = {BioForm} />
        <Route path = "/Login" component = {Login} />
        <Route path = "/SignUp" component = {SignUp} />
        <PrivateRoute exact path = "/WelcomePage" component = {WelcomePage} />
        <PrivateRoute exact path = "/SnacksAndMeals" component = {SnacksAndMeals} />
        <PrivateRoute exact path = "/CalculatedPage" component = {CalculatedPage} />
        <PrivateRoute exact path = "/Edit" component={EditForm} />
      </Switch>
    </div>
  );
}

export default App;
