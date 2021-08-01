import React from 'react';
import { Link } from 'react-router-dom';

//form to update goalsConceded, teamGoals, game, wins, losses.

export default function GameForm({
  team1,
  team2,
  updateGameStats,
  updatePlayerWins,
  updatePlayerLosses,
  updateTeamGoals,
  updateGoalsConceded,
}) {
  let team1goals = 0;
  let team2goals = 0;

  // below is where the 'updateStat' functions are called for the required players when 'submit Game' button is clicked.

  const handleClick = () => {
    team1.forEach((player) => {
      updateGameStats(player, player.games + 1);
    });
    team2.forEach((player) => {
      updateGameStats(player, player.games + 1);
    });
    if (team1goals > team2goals) {
      team1.forEach((player) => {
        updatePlayerWins(player, player.wins + 1);
      });
      team2.forEach((player) => {
        updatePlayerLosses(player, player.losses + 1);
      });
    } else if (team1goals < team2goals) {
      team2.forEach((player) => {
        updatePlayerWins(player, player.wins + 1);
      });
      team1.forEach((player) => {
        updatePlayerLosses(player, player.losses + 1);
      });
    }
    team1.forEach((player) => {
      updateTeamGoals(player, player.teamGoals + team1goals);
      updateGoalsConceded(player, player.goalsConceded + team2goals);
    });
    team2.forEach((player) => {
      updateTeamGoals(player, player.teamGoals + team2goals);
      updateGoalsConceded(player, player.goalsConceded + team1goals);
    });
  };

  // takes user input and updates 'teamGoals' variables that get passed into the 'updateStat' functions above.

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
        <Link to={'/squad'}>
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
