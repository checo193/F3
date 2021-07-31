import React from 'react';
import { Link } from 'react-router-dom';

//form to update goalsConceded, teamGoals, game, wins, losses.

export default function GameForm({ team1, team2, updateGameStats }) {

  let team1goals = 0;
  let team2goals = 0;

  const handleClick = () => {
    team1.forEach((player) => {
      // player.addGame();
      updateGameStats(player, player.games +1)
    });
    team2.forEach((player) => {
      // player.addGame();
      updateGameStats(player, player.games + 1);

    });
    if (team1goals > team2goals) {
      team1.forEach((player) => {
        player.addWin();
      });
      team2.forEach((player) => {
        player.addLoss();
      });
    } else if (team1goals < team2goals) {
      team2.forEach((player) => {
        player.addWin();
      });
      team1.forEach((player) => {
        player.addLoss();
      });
    }
    team1.forEach((player) => {
      player.addTeamGoals(team1goals);
      player.addGoalsConceded(team2goals);
    });
    team2.forEach((player) => {
      player.addTeamGoals(team2goals);
      player.addGoalsConceded(team1goals);
    });
  };

  function updateTeam1Goals(e) {
    const teamGoals = Number(e.target.value);
    team1goals = teamGoals;
  }

  function updateTeam2Goals(e) {
    const goalsConceded = Number(e.target.value);
    team2goals = goalsConceded;
  }
  return (
    <>
      <div className='teamGoalsForm'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
