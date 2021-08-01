import React from 'react';
import { Link } from 'react-router-dom';
import RotatingFootball from '../components/RotatingFootball'

export default function HomePage({ orderSquad }) {
  return (
    <div className='homePage'>
      <div className='footballImageContainer'>
        {/* <img
          className='footballImage'
          src='https://www.freeiconspng.com/thumbs/football-png/football-png-7.png'
        ></img> */}
        <RotatingFootball/>
      </div>
      <div className='buttonDiv'>
        <div className='btnContainer'>
          <Link to={'/squad'}>
            <button
              className='createTeamBtn'
              onClick={() => {
                orderSquad();
              }}
            >
              View Squad
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
