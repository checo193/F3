import React from 'react';
import PlayerForm from './PlayerForm';

export default function TeamPlayer({ player, updateStats }) {
  return (
    <>
      <div className='playerAndForm'>
        <div className='player'>
          <div className='playerName'>
            <h3>{player.name}</h3>
          </div>
          {/* <div className='imageContainer'>
        <img className='playerImage' src={player.url}></img>
      </div> */}
          <div className='playerStats'>
            <div className='playerStats1'>
              <h6 className='stat'>Games: {player.games}</h6>
              <h6 className='stat'>Wins: {player.wins}</h6>
              <h6 className='stat'>Losses: {player.losses}</h6>
            </div>
            <div className='playerStats2'>
              <h6 className='stat'>Motms: {player.motms}</h6>
              <h6 className='stat'>Goals: {player.goals}</h6>
              <h6 className='stat'>GPG: {player.goalsPerGame()}</h6>
            </div>
          </div>
        </div>
        <PlayerForm updateStats={updateStats} player={player}/>
      </div>
    </>
  );
}
