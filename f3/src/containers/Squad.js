import React from 'react';
import Player from '../components/Player';

export default function Squad({ squad }) {

  // display all the players in the squad, loops through squad, returning a player component for each player.
  const displaySquad = () => {
    return squad.map((player, index) => {
      return <Player key={index} player={player} />;
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
