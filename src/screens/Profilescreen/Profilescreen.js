import React from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../../components/Nav/Navbar';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../services/firebase';
import './Profilescreen.css';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className='profile'>
      <NavBar />

      <div className="profile_body">
        <h1>Edit Profile</h1>

        <div className="profile_info">
          <img
            src="https://th.bing.com/th/id/R.ac9a887966a8499936b10c60db71342c?rik=10ymZnp%2b1HOoNw&riu=http%3a%2f%2fwww.qubiaoqing.cn%2fpic%2f2020%2f12%2f10%2fytftvnwkw5y.jpg&ehk=28D0EsUBaYosb7OQpylW6oI7fNwlxnmQYt3osRBIY%2bw%3d&risl=&pid=ImgRaw&r=0"
            alt="profile_avatar"
          />

          <div className="profile_details">
            <h2>Email: {user.email}</h2>

            <div className="profile_plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className='profile_signout'>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen;
