import React from 'react';
import Player from '../components/Player';




export default function Squad({squad}) {

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
