import React from 'react';

export default function PlayerForm({ player }) {
  
  function updateGoals(e) {
    const goals = Number(e.target.value);
    player.addGoal(goals);
  }
  return (
    <div className='playerForm'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Goals
          <input onChange={updateGoals} />
        </label>
      </form>
    </div>
  );
}
