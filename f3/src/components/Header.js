import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to={'/'}>
        <div>
          <h1>F3</h1>
        </div>
      </Link>
      <div className='btnContainer'>
        <Link to={'/teams'}>
          <button className='createTeamBtn'>Create Team</button>
        </Link>
      </div>
    </header>
  );
}
