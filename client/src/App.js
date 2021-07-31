import './App.css';
import Squad from './containers/Squad';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teams from './containers/Teams';
// import json from './json-database/players.json';
import MakePlayer from './helper-functions/makePlayerObject';
import PlayingSquad from './containers/PlayingSquad';

function App() {
  const [squad, setSquad] = useState([]);
  const [orderedSquad, setOrderedSquad] = useState([]);
  const [playingSquad, setPlayingSquad] = useState([]);

  const url = window.location.pathname.split('/').pop();

  useEffect(() => {
    fetch('http://localhost:3000/squad').then((response) => {
      return response.json().then((data) => {
        setSquad(
          data.map((player) => {
            return new MakePlayer(
              player.id,
              player.name,
              player.games,
              player.wins,
              player.losses,
              player.goals,
              player.motms,
              player.teamGoals,
              player.goalsConceded
            );
          })
        );
      });
    });
    setPlayingSquad([])
  }, [url]);

  // Function to sort a squad in descending order of player rating.
  const playersByRating = (squad) => {
    const newSquad = [...squad];
    return newSquad.sort((currentPlayer, nextPlayer) => {
      return nextPlayer.calculateRating() - currentPlayer.calculateRating();
    });
  };

  // When user clicks 'create teams' button, arranged the selected squad in order of skill rating.
  const orderSquad = () => {
    setOrderedSquad(playersByRating(playingSquad));
  };

  // Either adds or removes players to the 'playingSquad' depending on if they are already included or not.
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
  };

  function updatePlayerStats(player, newGoals, newMotms) {
    console.log(player.id);
      fetch(`http://localhost:3000/squad/${player.id}`, {
        method: 'PUT',
        body: JSON.stringify({goals: newGoals, motms: newMotms}),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        return response.json().then((data) => {
          setSquad(data);
        });
      });
  }

  return (
    <div className='App'>
      <Router>
        <div>
          <Header orderSquad={orderSquad} />
        </div>
        <Switch>
          <Route path='/teams'>
            <Teams updatePlayerStats={updatePlayerStats} squad={orderedSquad} />
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
