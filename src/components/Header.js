import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import '../styles/common.css';

const Header = () => {
  return (
    <div className="navbar">
      <Link className="link-main" to="/main">
        <h2 className="navbar-title"><FontAwesomeIcon icon={faRocket} size = "sm" style={{color: "#ffffff",}} /> Fiber Issues</h2>
      </Link>
      <div className="navbar-content">
        <a href=''>
          <img className="profile-icon" src="https://i.pinimg.com/236x/25/b1/87/25b18793106b2a3ef03f0908b0b41eb5--graphic-illustration-graphic-art.jpg" alt="Profile Icon" />
        </a>
        <a className="btn-sign-out" href="/login_page/logout/"><i className='bx bx-log-out'></i>Log out</a>
      </div>
    </div>
  );
};

export default Header;
