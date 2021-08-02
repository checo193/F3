import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS_Files/CreateTeams.css'

export default function CreateTeam({orderSquad}) {
  return (
    <div className='CreateTeams_btnContainer'>
      <Link to={'/teams'}>
        <button
          className='CreateTeams_createTeamBtn'
          onClick={() => {
            orderSquad();
          }}
        >
          <b>Create Teams</b>
        </button>
      </Link>
    </div>
  );
}
