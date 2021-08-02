import React, { useState } from 'react';
import '../CSS_Files/PlayerForm.css'

// form to update goals and motms stat.

export default function PlayerForm({ player, updatePlayerStats }) {
  // takes user input and updates 'newGoals' variable, this is then passed to the updatePlayerStats function.
  let newGoals = 0;
  function updateGoals(e) {
    const goals = Number(e.target.value);
    newGoals = player.goals + goals;
  }

  // takes user input and updates 'newMotms' variable, this is then passed to the updatePlayerStats function.
  let newMotms = 0;
  function updateMotm() {
    newMotms = player.motms + 1;
  }

  return (
    <div className='PlayerForm_playerFormContainer'>
      <form
        className='PlayerForm_playerForm'
        onSubmit={(e) => {
          e.preventDefault();
          updatePlayerStats(player, newGoals, newMotms);
        }}
      >
        <label className='PlayerForm_playerFormLabel'>
          Goals
          <input onChange={updateGoals} />
        </label>
        <label className='PlayerForm_playerFormLabel'>
          MOTM
          <input type='checkbox' onChange={updateMotm} />
        </label>
      </form>
    </div>
  );
}
