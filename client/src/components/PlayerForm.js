import React from 'react';

export default function PlayerForm({ player }) {
  let value = 0;

  function updateValue(e) {
    const goals = Number(e.target.value);
    value = goals;
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
          player.addGoal(value);
        }}
      >
        <label className='playerFormLabel'>
          Goals
          <input onChange={updateValue} />
        </label>
        <label className='playerFormLabel'>
          MOTM
          <input type='checkbox' onChange={updateMotm} />
        </label>
      </form>
    </div>
  );
}
