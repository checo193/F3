import React from 'react';
import '../CSS_Files/Login.css';
import { Link } from 'react-router-dom';
import url from '../assets/Screenshot 2021-08-02 at 12.10.02.png'

export default function LogIn() {
  return (
    <>
      <div className='Login_formContainer'>
        <form className='Login_form'>
          <div className='Login_container'>
            <div>
              <label for='username'>
                <b>Username:</b>
              </label>
              <input
                className='Login_usernameInput'
                type='text'
                name='username'
                placeholder='Enter Username'
                required
              ></input>
            </div>
            <div>
              <label for='password'>
                <b>Password:</b>
              </label>
              <input
                className='Login_passwordInput'
                type='password'
                name='password'
                placeholder='Enter Password'
                required
              ></input>
            </div>
            <Link to='/loading'>
              <button className='Login_button' type='submit'>
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
