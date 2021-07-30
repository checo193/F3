import React from 'react';

// form to update goals and motms stat.

export default function PlayerForm({ player }) {


  let addedGoals = 0;
  function updateGoals(e) {
    const goals = Number(e.target.addedGoals);
    addedGoals = goals;
  }

  function updateMotm() {
    player.addMotm();
  }

  return (
    <div className='playerFormContainer'>
      <form
        className='playerForm'
        onSubmit={(e) => {
          e.preventDefault();
          player.addGoal(addedGoals);
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
