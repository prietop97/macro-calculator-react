import React from 'react';
import { Route , Switch } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import BioForm from './Components/BioForm';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import WelcomePage from './Components/WelcomePage';
import SnacksAndMeals from './Components/SnacksAndMeals';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route path = "/Biometrics" component = {BioForm} />
        <Route path = "/Login" component = {Login} />
        <Route path = "/SignUp" component = {SignUp} />
        <Route path = "/WelcomePage" component = {WelcomePage} />
        <Route path = "/SnacksAndMeals" component = {SnacksAndMeals} />
      </Switch>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
