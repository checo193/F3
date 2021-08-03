import React, { useEffect } from 'react';
import '../CSS_Files/LoadingScreen.css';

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
      <hr></hr>
      <div className='LoadingScreen_container'>
        <div></div>
        <div className='LoadingScreen_titleContainer'>
          <h1 className='LoadingScreen_title'>Generating squad...</h1>
        </div>
        <div class='LoadingScreen_football'></div>
      </div>
      <hr></hr>
    </>
  );
}
