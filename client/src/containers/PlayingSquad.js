import React from 'react';
import Player from '../components/Player';

export default function PlayingSquad({ squad, handleClick }) {
  const displayPlayingSquad = () => {
    return squad.map((player) => {
      return (
        <Player key={player.id} player={player} handleClick={handleClick} />
      );
    });
  };
  return (
    <>
      <h3 className='title'>Whos playing</h3>
      <div className='playingSquadContainer'>
        <div className='playingSquad'>
          <div className='playingSquadList'>{displayPlayingSquad()}</div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
