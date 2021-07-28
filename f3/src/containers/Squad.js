import React, { useState } from 'react';
import Player from '../components/Player';
import json from '../json-database/players.json';
import MakePlayer from '../helper-functions/makePlayerObject';

const squadWithMethods = json.map((player) => {
  return new MakePlayer(
    player.name,
    player.games,
    player.wins,
    player.losses,
    player.goals,
    player.motms,
    player.teamGoals,
    player.goals
  );
});

export default function Squad() {
  const [squad, setSquad] = useState(squadWithMethods);

  const addMethods = (arr) => {};

  const displaySquad = () => {
    return squad.map((player) => {
      return <Player player={player} />;
    });
  };

  return (
    <>
      <div className='squadContainer'>
        <div className='squad'>
          <div className='squadList'>{displaySquad()}</div>
        </div>
      </div>
    </>
  );
}
