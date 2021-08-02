import React, { useEffect } from 'react';
import '../CSS_Files/Player.css';
import {determinePlayerNameClass, determineCard, determineStatClass } from '../helper-functions/player-functions';
// import determineCard from '../helper-functions/player-functions'

export default function Player({ player, handleClick }) {

  return (
    <div
      className='Player_playerCard'
      onClick={() => {
        // adds or removes players from playing squad.
        handleClick(player);
      }}
    >
      <img className='Player_cardImage' src={determineCard(player)}></img>
      <div className={determinePlayerNameClass(player)}>
        <h3>{player.name}</h3>
      </div>
      <div className='Player_playerImageContainer'>
        <img className='Player_playerImage' src={player.url}></img>
      </div>
      <div className='Player_playerStats'>
        <div className='Player_playerStats1'>
          <h6 className={determineStatClass(player)}>Games: {player.games}</h6>
          <h6 className={determineStatClass(player)}>Wins: {player.wins}</h6>
          <h6 className={determineStatClass(player)}>
            Losses: {player.losses}
          </h6>
        </div>
        <div className='Player_playerStats2'>
          <h6 className={determineStatClass(player)}>Motms: {player.motms}</h6>
          <h6 className={determineStatClass(player)}>Goals: {player.goals}</h6>
          <h6 className={determineStatClass(player)}>
            GPG: {Math.round((player.goals / player.games) * 100) / 100 || 0}
          </h6>
        </div>
      </div>
    </div>
  );
}
