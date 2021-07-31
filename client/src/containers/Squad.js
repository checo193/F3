import React from 'react';
import Player from '../components/Player';

export default function Squad({ squad, handleClick }) {
  // display all the players in the squad, loops through squad, returning a player component for each player.
  const displaySquad = () => {
    return squad.map((player) => {
      return (
        <Player key={player.id} player={player} handleClick={handleClick} />
      );
    });
  };

  return (
    <>
      <div className='squadContainer'>
        <div className='squad'>
          <div className='squadList'>{displaySquad()}</div>
        </div>
      </div>
    </>
  );
}
