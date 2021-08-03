import React from 'react';
import Login from '../components/Login';
import '../CSS_Files/HomePage.css';

export default function HomePage({ orderSquad }) {
  return (
    <div className='HomePage_homePage'>
      <div className='HomePage_logInContainer'>
        <Login />
      </div>
    </div>
  );
}
