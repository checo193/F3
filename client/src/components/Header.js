import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS_Files/Header.css';

export default function Header({ orderSquad }) {
  return (
    <header>
      <Link to={'/'}>
        <div>
          <h1 className='Header_title'>F3</h1>
        </div>
      </Link>
    </header>
  );
}
