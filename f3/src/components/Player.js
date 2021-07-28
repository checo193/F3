import React from 'react'

export default function Player({player}) {
  return (
    <div className='player'>
      <h3>{player.name}</h3>
      <h6>Goals: {player.goals}</h6>
      <h6>Games: {player.games}</h6>
      <h6>Wins: {player.wins}</h6>
      <h6>Losses: {player.losses}</h6>
      <h6>Motms: {player.motms}</h6>
    </div>
  );
}
