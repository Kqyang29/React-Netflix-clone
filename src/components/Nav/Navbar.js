import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function NavBar() {

  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);

    }
    else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);


  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_container">
        <img
          onClick={() => navigate('/')}
          className='nav_logo'
          src="https://plasticoceans.org/wp-content/uploads/2018/09/netflix-logo-1.png"
          alt="Logo"
        />

        <img
          onClick={() => navigate('./profile')}
          className='nav_avatar'
          src="https://th.bing.com/th/id/OIP.jLBMkle0qMgKt5JDfP78mgHaHa?pid=ImgDet&rs=1"
          alt="avatar"
        />

      </div>

    </div>
  )
}

export default NavBar;
