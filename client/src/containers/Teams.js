import React, { useState, useEffect } from 'react';
import TeamPlayer from '../components/TeamPlayer';
import GameForm from '../components/GameForm';

export default function Teams({ playingSquad, updateStats }) {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  // const [orderedSquad, setOrderedSquad] = useState([]);
  /* 
  const initialState = {
    team1 : [],
    team2: [],
  }
  const [teams, setTeams] = useState(initialState);
  */

  // Function to create teams, loops through playingSquad sorted by rating, adds first player to team 1, next to team 2, next to team 1 etc...
  const createTeams = (playingSquad) => {
    const tempTeam1 = [];
    const tempTeam2 = [];
    // const tempTeams = { team1: [], team2: []}
    for (let i = 0; i < playingSquad.length; i++) {
      if (i % 2 === 0) {
        tempTeam1.push(playingSquad[i]);
        //tempTeams.team1.push(playingSquad[i]);
      } else {
        tempTeam2.push(playingSquad[i]);
        //tempTeams.team2.push(playingSquad[i]);
      }
    }
    setTeam1((prevState) => [...prevState, ...tempTeam1]);
    setTeam2((prevState) => [...prevState, ...tempTeam2]);
    // setTeams( prevState => { ...prevState, ...tempTeams})
    // setTeams( {...tempTeams})
  };

  // function to display teams, maps through a team and returns a Player component for each player.
  const displayTeam = (team) => {
    return team.map((player, index) => {
      return <TeamPlayer updateStats={updateStats} key={index} player={player} />;
    });
  };


  // As soon as the teams page is loaded, create the teams.
  useEffect(() => {
    createTeams(playingSquad);
  }, []);

  return (
    <>
      {/* {console.log(playingSquad)} */}
      <div className='teamsTitle'>
        <h1>Teams</h1>
      </div>
      <div className='teams'>
        <div className='team'>
          <div className='teamTitleContainer'>
            <h1 className='title'>Team 1</h1>
          </div>
          <div>{displayTeam(team1)}</div>
        </div>
        <div className='team'>
          <div className='teamTitleContainer'>
            <h1 className='title'>Team 2</h1>
          </div>
          <div>{displayTeam(team2)}</div>
        </div>
      </div>
      <div>
        <GameForm team1={team1} team2={team2}/>
      </div>
    </>
  );
}
