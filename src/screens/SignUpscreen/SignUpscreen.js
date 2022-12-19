import React, { useRef } from 'react';
import { auth } from '../../services/firebase';
import './SignUpscreen.css';
function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      alert(authUser.user.email + " registration successful");
    }).catch(error => {
      alert("User registration failed " + error.message);
    });


  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      alert(authUser.user.email + " Login successful");
    }).catch(error => {
      alert("User Login failed " + error.message);
    });

  };
  return (
    <div className='signup'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
          <span className='signup_gray'>
            New to Netflix?
          </span>
          <span onClick={register} className="signup_link">
            Sign Up Now!
          </span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen;
