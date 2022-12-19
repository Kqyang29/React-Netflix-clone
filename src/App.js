import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/Homescreen/Homescreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/Loginscreen/Loginscreen';
import { auth } from './services/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/Profilescreen/Profilescreen';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      }
      else {
        // logout
        dispatch(logout());
      }
    });

    return unSubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </BrowserRouter>

    </div>
  );
}

export default App;
