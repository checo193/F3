import './App.css';
import Squad from './containers/Squad';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teams from './containers/Teams';
import json from './json-database/players.json';
import MakePlayer from './helper-functions/makePlayerObject';
import PlayingSquad from './containers/PlayingSquad';

// Adds required methods to player objects.
const squadWithMethods = json.map((player) => {
  return new MakePlayer(
    player.id,
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
  const [playingSquad, setPlayingSquad] = useState([]);

  // Function to sort a squad in descending order of player rating.
  const playersByRating = (squad) => {
    const newSquad = [...squad];
    return newSquad.sort((currentPlayer, nextPlayer) => {
      return nextPlayer.calculateRating() - currentPlayer.calculateRating();
    });
  };

  useEffect(() => {
    setOrderedSquad(playersByRating(playingSquad));
    console.log();
  }, [playingSquad]);

  const handleClick = (player) => {
    let inList = false;
    let index = 0;

    for (let member of playingSquad) {
      if (member.id === player.id) {
        inList = true;
        index = playingSquad.indexOf(member);
      }
    }

    if (inList === false) {
      setPlayingSquad((prevState) => [...prevState, player]);
      const tempSquad = squad;
      index = squad.indexOf(player);
      tempSquad.splice(index, 1);
      setSquad(tempSquad);
    }
    if (inList === true) {
      const arr = [...playingSquad];
      arr.splice(index, 1);
      setPlayingSquad(arr);
      setSquad((prevState) => [...prevState, player]);
    }
    // console.log(`clicked ${player.id}`);
    // setPlayingSquad((prevState) => [...prevState, player]);
  };

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
            <PlayingSquad squad={playingSquad} handleClick={handleClick} />
            <Squad squad={squad} handleClick={handleClick} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
