import React from 'react';
import Login from '../CSS_Files/Login.css';

export default function LogIn() {
  return (
    <>
      <div className="Login_formContainer">
        <form className='Login_form'>
          <div className='Login_container'>
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
            <label for='password'>
              <b>Password:</b>
            </label>
            <input
              className='Login_passwordInput'
              type='password'
              name='password'
              placeholder='Enter Password'
            ></input>
            <button className='Login_button' type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
