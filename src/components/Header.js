import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import '../styles/common.css';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn } = useAuth()

    if (!isLoggedIn)   window.location.href = "/login";


  return (
    
    <div className="navbar">
      <Link className="link-main" to="/main">
        <h2 className="navbar-title"><FontAwesomeIcon icon={faRocket} size = "sm" style={{color: "#ffffff",}} /> Fiber Issues</h2>
      </Link>
      <div className="navbar-content">
        <a href=''>
          <img className="profile-icon" src={authUser.profile_picture} alt="Profile Icon" />
        </a>
        <p>{authUser.first_name} {authUser.last_name}</p>
        <a className="btn-sign-out" href="/login_page/logout/"><i className='bx bx-log-out'></i>Log out</a>
      </div>
    </div>
  );
};

export default Header;
