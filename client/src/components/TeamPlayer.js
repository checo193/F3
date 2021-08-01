import React from 'react';
import PlayerForm from './PlayerForm';

export default function TeamPlayer({ player, updatePlayerStats, checkRating }) {
  return (
    <>
      <div className='playerAndForm'>
        <div
          onClick={() => {
            checkRating(player);
          }}
          className='playerCard'
        >
          <img
            className='cardImage'
            src={
              'https://scontent.xx.fbcdn.net/v/t1.15752-9/222193876_292896532593160_624424671877791562_n.png?_nc_cat=100&ccb=1-3&_nc_sid=aee45a&_nc_ohc=kztlqwu-NkkAX8uyQUJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=d303d4c00c57006360e1672bc4c4f67a&oe=6128CCE7'
            }
          ></img>
          <div className='playerName'>
            <h3>{player.name}</h3>
          </div>
          <div className='playerStats'>
            <div className='playerStats1'>
              <h6 className='stat'>Games: {player.games}</h6>
              <h6 className='stat'>Wins: {player.wins}</h6>
              <h6 className='stat'>Losses: {player.losses}</h6>
            </div>
            <div className='playerStats2'>
              <h6 className='stat'>Motms: {player.motms}</h6>
              <h6 className='stat'>Goals: {player.goals}</h6>
              <h6 className='stat'>GPG: {player.goalsPerGame() || 0}</h6>
            </div>
          </div>
        </div>
        <PlayerForm updatePlayerStats={updatePlayerStats} player={player} />
      </div>
    </>
  );
}
