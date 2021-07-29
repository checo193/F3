import React from 'react';
import { Link } from 'react-router-dom';

export default function GameForm({ team1, team2 }) {
  const handleClick = () => {
    console.log('team1: ', team1);
    console.log('team2: ', team2);
    team1.forEach((player) => {
      player.addGame();
    });
    team2.forEach((player) => {
      player.addGame();
    });
  };
  return (
    <>
      <div className='teamGoalsForm'>
        <form>
          <label>
            Team 1 Goals: <input></input>
          </label>
          <label>
            Team 2 Goals: <input></input>
          </label>
        </form>
      </div>
      <div className='gameForm'>
        <Link to={'/'}>
          <button
            className='submitButton'
            onClick={() => {
              handleClick();
            }}
          >
            Submit Game
          </button>
        </Link>
      </div>
    </>
  );
}
