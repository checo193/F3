import React from 'react';

export default function testPlayer({ player, handleClick }) {
  return (
    <div
      className='testPlayerCard'
      onClick={() => {
        // adds or removes players from playing squad.
        handleClick(player);
      }}
    >
      <img
        className='cardImage'
        src={
          'https://scontent.xx.fbcdn.net/v/t1.15752-9/222193876_292896532593160_624424671877791562_n.png?_nc_cat=100&ccb=1-3&_nc_sid=aee45a&_nc_ohc=kztlqwu-NkkAX8uyQUJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=d303d4c00c57006360e1672bc4c4f67a&oe=6128CCE7'
        }
      ></img>
      <div className='testTitle'>
        <h3>{player.name}</h3>
      </div>
      <div className='testPlayerStats'>
        <div className='testPlayerStats1'>
          <h6 className='testStat'>Games: {player.games}</h6>
          <h6 className='testStat'>Wins: {player.wins}</h6>
          <h6 className='testStat'>Losses: {player.losses}</h6>
        </div>
        <div className='testPlayerStats2'>
          <h6 className='testStat'>Motms: {player.motms}</h6>
          <h6 className='testStat'>Goals: {player.goals}</h6>
          <h6 className='testStat'>
            GPG: {Math.round((player.goals / player.games) * 100) / 100 || 0}
          </h6>
        </div>
      </div>
    </div>
  );
}
