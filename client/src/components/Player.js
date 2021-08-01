import React from 'react';

export default function Player({ player, handleClick }) {

  const topGoalScorerImg =
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/226077811_931117614135776_1330883807236193151_n.png?_nc_cat=110&ccb=1-3&_nc_sid=aee45a&_nc_ohc=vpI9R1wcjSkAX-iC008&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=1443dfca95eb7847a6d7fa0fa388e281&oe=612A08AA';

  const normalImg =
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/222193876_292896532593160_624424671877791562_n.png?_nc_cat=100&ccb=1-3&_nc_sid=aee45a&_nc_ohc=kztlqwu-NkkAX8uyQUJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=d303d4c00c57006360e1672bc4c4f67a&oe=6128CCE7';

    let imgURL = '';



  return (
    <div
      className='playerCard'
      onClick={() => {
        // adds or removes players from playing squad.
        handleClick(player);
      }}
    >
      <img
        tabIndex="0"
        className='cardImage'
        src={
          (player.goals > 10 ? topGoalScorerImg : normalImg)
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
          <h6 className='stat'>
            GPG: {Math.round((player.goals / player.games) * 100) / 100 || 0}
          </h6>
        </div>
      </div>
    </div>
  );
}
