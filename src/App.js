import React from 'react';
import { Route , Switch } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import BioForm from './Components/BioForm';

function App() {
  return (
    <div>
      Hello World oijweofj2w3ifj9034j0
      <Switch>
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route path = "/Biometrics" component = {BioForm} />
      </Switch>
    </div>
  );
}

export default App;
