import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS_Files/Buttons.css';

export default function CreateTeam({ orderSquad }) {
  return (
    <div className='Buttons_btnContainer'>
      <div>
        <Link to={'/teams'}>
          <button
            className='Buttons_createTeamBtn'
            onClick={() => {
              orderSquad();
            }}
          >
            <b>Create Teams</b>
          </button>
        </Link>
        <button className='Buttons_createPlayerBtn'>
          <b>Add Player</b>
        </button>
      </div>
    </div>
  );
}
