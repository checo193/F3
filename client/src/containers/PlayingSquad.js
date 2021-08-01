import React from 'react';
import Player from '../components/Player';

export default function PlayingSquad({ squad, handleClick }) {
  // display all the players in the squad, loops through the 'playing squad', returning a player component for each player.
  const displayPlayingSquad = () => {
    return squad.map((player) => {
      return (
        <Player key={player.id} player={player} handleClick={handleClick} />
      );
    });
  };
  return (
    <>
      <hr></hr>
      <div className='playingSquadContainer'>
        <div className='playingSquad'>
          <div className='playingSquadList'>{displayPlayingSquad()}</div>
        </div>
      </div>
    </>
  );
}
