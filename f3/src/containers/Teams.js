import React, { useState, useEffect } from 'react';
import TeamPlayer from '../components/TeamPlayer';

export default function Teams({ squad }) {
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

  // Function to create teams, loops through squad sorted by rating, adds first player to team 1, next to team 2, next to team 1 etc...
  const createTeams = (squad) => {
    const tempTeam1 = [];
    const tempTeam2 = [];
    // const tempTeams = { team1: [], team2: []}
    for (let i = 0; i < squad.length; i++) {
      if (i % 2 === 0) {
        tempTeam1.push(squad[i]);
        //tempTeams.team1.push(squad[i]);
      } else {
        tempTeam2.push(squad[i]);
        //tempTeams.team2.push(squad[i]);
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
      console.log('team: ', team);
      return <TeamPlayer key={index} player={player} />;
    });
  };

  useEffect(() => {
    createTeams(squad);
  }, []);

  return (
    <>
      {/* {console.log(squad)} */}
      <div className='teamsTitle'>
        <h1>Teams</h1>
      </div>
      <div className='teams'>
        <div className='team'>
          <h1>Team 1</h1>
          <div>{displayTeam(team1)}</div>
        </div>
        <div className='team'>
          <h1>Team 2</h1>
          <div>{displayTeam(team2)}</div>
        </div>
      </div>
    </>
  );
}
