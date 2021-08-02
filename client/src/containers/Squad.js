import React from 'react';
import Player from '../components/Player';
import '../CSS_Files/Squad.css'

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
    <hr></hr>
      <div className='Squad_squadContainer'>
        <div className='Squad_squad'>
          <div className='Squad_squadList'>{displaySquad()}</div>
        </div>
      </div>
    </>
  );
}
