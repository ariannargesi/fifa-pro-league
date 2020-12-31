import React from "react";
import Layout from "./layouts/Layout";
import Contracts from "./routes/Contracts";
import MatchWidget from "./components/MatchWidget";
import HomePage from "./Pages/Home"
import Discord from "./Pages/Discord"
import Play from './Pages/Play'
import Admin from './Pages/Admin'
import League from './Pages/League'
import PlayerHub from './Pages/PlayerHub'
import ClubHub from './Pages/ClubHub'
import Inbox from './Pages/Inbox'
import Team from './Pages/Team'
import Squad from './Pages/Squad'
import Stats from './Pages/Stats'
import Fixtures from './Pages/Fixtures'
import Modify from './Pages/Modify'
import Transfers from './Pages/Transfers'
import Office from './Pages/Office'
import Settings from './Pages/Settings'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path='/play'>
          <Play/>
      </Route>
      <Route path='/admin'>
          <Admin/>
      </Route>      
      <Route path='/league'>
          <League/>
      </Route>
      <Route path='/playerhub'>
          <PlayerHub/>
      </Route>
      <Route path='/clubhub'>
          <ClubHub/>
      </Route>
      <Route path='/discord'>
          <Discord/>
      </Route>      
      <Route path='/Inbox'>
          <Inbox/>
      </Route>
      <Route path='/Team'>
          <Team/>
      </Route>
      <Route path='/Stats'>
          <Stats/>
      </Route>
      <Route path='/Squad'>
          <Squad/>
      </Route>
      <Route path='/Fixtures'>
          <Fixtures/>
      </Route>
      <Route path='/Modify'>
          <Modify/>
      </Route>
      <Route path='/Transfers'>
          <Transfers/>
      </Route>
      <Route path='/Office'>
          <Office/>
      </Route>
      <Route path='/Settings'>
          <Settings/>
      </Route>
    </Switch>
  );
};
