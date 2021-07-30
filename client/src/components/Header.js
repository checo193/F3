import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ orderSquad }) {

  return (
    <header>
      <Link to={'/'}>
        <div>
          <h1 className='mainTitle'>F3</h1>
        </div>
      </Link>
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
    </header>
  );
}
