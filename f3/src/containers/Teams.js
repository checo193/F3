import React from 'react';

const team1 = [];

const team2 = [];

export default function Teams({ squad }) {
  const playersByRating = (squad) => {
    return squad.sort((currentPlayer, nextPlayer) => {
      return nextPlayer.calculateRating() - currentPlayer.calculateRating();
    });
  };
  return (
    <>
      <div className='teamsTitle'>
        <h1>Teams</h1>
      </div>
      <div className='teams'>
        <div className='team'>
          <h3>Team 1</h3>
        </div>
        <div className='team'>
          <h3>Team 2</h3>
        </div>
      </div>
    </>
  );
}
