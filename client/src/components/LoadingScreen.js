import React, { useEffect } from 'react';
import '../CSS_Files/LoadingScreen.css';
import { Link } from 'react-router-dom';
import Squad from '../containers/Squad';

export default function LoadingScreen() {
  const loadSquad = () => {
    window.location.pathname = '/squad';
  };

  const timeSquad = () => {
    setTimeout(loadSquad, 3000);
  };

  useEffect(() => {
    timeSquad();
  });

  return (
    <>
      <div className='LoadingScreen_titleContainer'>
        <h1 className='LoadingScreen_title'>Gathering Squad...</h1>
      </div>
      <div class='LoadingScreen_football'></div>
    </>
  );
}
