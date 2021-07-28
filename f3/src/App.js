import './App.css';
import Squad from './containers/Squad';
import Header from './components/Header';
import React, { useState }from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Teams from './containers/Teams';
import json from './json-database/players.json'
import MakePlayer from './helper-functions/makePlayerObject'

const squadWithMethods = json.map((player) => {
  return new MakePlayer(
    player.name,
    player.games,
    player.wins,
    player.losses,
    player.goals,
    player.motms,
    player.teamGoals,
    player.goals
  );
});

function App() {

  const [squad, setSquad] = useState(squadWithMethods);

  return (
    <div className='App'>
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path='/teams'>
            <Teams squad={squad}/>
          </Route>
          <Route path='/'>
            <Squad squad={squad}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
