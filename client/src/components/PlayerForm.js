import React from 'react';

export default function PlayerForm({ player }) {
  let value = 0;
  let motm = false;

  function updateValue(e) {
    const goals = Number(e.target.value);
    value = goals;
  }

  function updateMotm() {
    player.addMotm();
  }

  return (
    <div className='playerForm'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          player.addGoal(value);
          // if (motm === true) {
          //   player.addMotm();
          // }
        }}
      >
        <label>
          Goals
          <input onChange={updateValue} />
        </label>
        <label>
          MOTM
          <input type='checkbox' onChange={updateMotm} />
        </label>
      </form>
    </div>
  );
}
