import React from 'react';

export default function PlayerForm({ player }) {
  let value = 0;

  function updateValue(e) {
    const goals = Number(e.target.value);
    value = goals;
  }

  return (
    <div className='playerForm'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          player.addGoal(value);
        }}
      >
        <label>
          Goals
          <input onChange={updateValue} />
        </label>
      </form>
    </div>
  );
}
