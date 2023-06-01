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
        <a href='/user_page/14'>
          <img className="profile-icon" src="https://wazowski-asw-s3-bucket.s3.amazonaws.com/static/profile_pictures/14.png" alt="Profile Icon" />
        </a>
        <a className="btn-sign-out" href="/login_page/logout/"><i className='bx bx-log-out'></i>Log out</a>
      </div>
    </div>
  );
};

export default Header;
