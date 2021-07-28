import React, { useState } from 'react';
import Player from '../components/Player';
import json from '../json-database/players.json';

export default function Squad() {
  const [squad, setSquad] = useState(json);

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
