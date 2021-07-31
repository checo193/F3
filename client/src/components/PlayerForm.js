import React, { useState } from 'react';

// form to update goals and motms stat.

export default function PlayerForm({ player, updatePlayerStats }) {
  const [playerStats, setPlayerStats] = useState({
    //   name: '',
    //   games: null,
    //   wins: null,
    //   losses: null,
    //   goals: null,
    //   motms: null,
    //   teamGoals: null,
    //   goalsConceded: 0
  });

  let newGoals = 0;
  function updateGoals(e) {
    console.log(e.target.value);
    const goals = Number(e.target.value);
    newGoals = player.goals + goals;
  }

  let newMotms = 0;
  function updateMotm() {
    newMotms = player.motms + 1;
  }

  return (
    <div className='playerFormContainer'>
      <form
        className='playerForm'
        onSubmit={(e) => {
          // console.log('e: ', e.target.value);
          e.preventDefault();
          // player.addGoal(newGoals);
          updatePlayerStats(player, newGoals, newMotms);
        }}
      >
        <label className='playerFormLabel'>
          Goals
          <input onChange={updateGoals} />
        </label>
        <label className='playerFormLabel'>
          MOTM
          <input type='checkbox' onChange={updateMotm} />
        </label>
      </form>
    </div>
  );
}
