import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/team/:idTeam">
          <LeagueDetail></LeagueDetail>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
      </Switch>
  </Router>
 
  );
}

export default App;
