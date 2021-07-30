import React, { useState } from 'react';

// form to update goals and motms stat.

export default function PlayerForm({ player, updateStats }) {
  const [playerStats, setPlayerStats] = useState({
  //   name: '',
  //   games: null,
  //   wins: null,
  //   losses: null,
  //   goals: null,
  //   motms: null,
  //   teamGoals: null,
  //   goalsConceded: 0
  })

  let newGoals = 0;
  function updateGoals(e) {
    console.log(e.target.value);
    const goals = Number(e.target.value);
    newGoals = player.goals + goals;
  }

  let newMotms = 0;
  function updateMotm() {
    newMotms = player.motm + 1
  }
  // function updateMotm(player) {
  //   setPlayerStats({ motms: player.motms + 1 });
  //   console.log(playerStats);
  //   fetch(`http://localhost:3000/squad/${player.id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify(playerStats),
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then((response) => {
  //     return response.json().then((data) => {
  //       // setSquad(data);
  //     });
  //   });
  //   // player.addMotm();
  // }

  return (
    <div className='playerFormContainer'>
      <form
        className='playerForm'
        onSubmit={(e) => {
          // console.log('e: ', e.target.value);
          e.preventDefault();
          // player.addGoal(newGoals);
          updateStats(player, newGoals);
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
