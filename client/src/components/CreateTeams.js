import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateTeam({orderSquad}) {
  return (
    <div className='btnContainer'>
      <Link to={'/teams'}>
        <button
          className='createTeamBtn'
          onClick={() => {
            orderSquad();
          }}
        >
          Create Teams
        </button>
      </Link>
    </div>
  );
}
