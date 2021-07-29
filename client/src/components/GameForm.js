import React from 'react';
import { Link } from 'react-router-dom';

export default function GameForm({ team1, team2 }) {
  let team1goals = 0;
  let team2goals = 0;

  const handleClick = () => {
    console.log('team1: ', team1);
    console.log('team2: ', team2);
    team1.forEach((player) => {
      player.addGame();
    });
    team2.forEach((player) => {
      player.addGame();
    });
  };

  function updateTeam1Goals (e) {
    const teamGoals = Number(e.target.value);
    team1goals = teamGoals;
  }

  function updateTeam2Goals (e) {
    const goalsConceded = Number(e.target.value);
    team2goals = goalsConceded;
  }
  return (
    <>
      <div className='teamGoalsForm'>
        <form onSubmit={(e) => {
          e.preventDefault();
          team1.forEach((player) => {
            player.addTeamGoals(team1goals);
            player.addGoalsConceded(team2goals);
          })
          team2.forEach((player) => {
            player.addTeamGoals(team2goals)
            player.addGoalsConceded(team1goals)
          })
        }}>
          <label className='team1GoalForm'>
            Team 1 Goals: <input onChange={updateTeam1Goals}></input>
          </label>
          <label className='team2GoalForm'>
            Team 2 Goals: <input onChange={updateTeam2Goals}></input>
          </label>
        </form>
      </div>
      <div className='gameForm'>
        <Link to={'/'}>
          <button
            className='submitButton'
            onClick={() => {
              handleClick();
            }}
          >
            Submit Game
          </button>
        </Link>
      </div>
    </>
  );
}
