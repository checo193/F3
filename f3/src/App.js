import './App.css';
import Squad from './containers/Squad';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teams from './containers/Teams';
import json from './json-database/players.json';
import MakePlayer from './helper-functions/makePlayerObject';


// Adds required methods to player objects.
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
  const [orderedSquad, setOrderedSquad] = useState([]);


  // Function to sort a squad in descending order of player rating.
  const playersByRating = (squad) => {
    const newSquad = [...squad];
    return newSquad.sort((currentPlayer, nextPlayer) => {
      return nextPlayer.calculateRating() - currentPlayer.calculateRating();
    });
  };

  useEffect(() => {
    setOrderedSquad(playersByRating(squad));
  }, []);

  return (
    <div className='App'>
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path='/teams'>
            <Teams squad={orderedSquad} />
          </Route>
          <Route path='/'>
            <Squad squad={squad} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
