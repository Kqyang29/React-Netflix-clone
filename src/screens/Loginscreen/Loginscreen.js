import React, { useState } from 'react';
import SignUpScreen from '../SignUpscreen/SignUpscreen';
import './Loginscreen.css';

function LoginScreen() {

  const [signIn, setSignIn] = useState(false);
  return (
    <div className='login'>
      <div className="login_bg">
        <img
          className='login_logo'
          src="https://plasticoceans.org/wp-content/uploads/2018/09/netflix-logo-1.png"
          alt="login_logo"
        />

        <button
          className='login_btn'
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>

        <div className="login_gradient" />
      </div>

      <div className="login_body">
        {signIn
          ? (
            <SignUpScreen />
          )
          : (
            <>
              <h1>Unlimited films, TV Programmes and more.</h1>
              <h2>Watch anywhere, Cancel at any time.</h2>
              <h3> Ready to watch? Enter your email to create or restart your membership.</h3>


              <div className="login_input">
                <form>
                  <input type="email" placeholder='email address' />
                  <button onClick={() => setSignIn(true)} className='login_startBtn'>GET STARTED</button>
                </form>
              </div>
            </>
          )}
      </div>
    </div>
  )
}

export default LoginScreen;
