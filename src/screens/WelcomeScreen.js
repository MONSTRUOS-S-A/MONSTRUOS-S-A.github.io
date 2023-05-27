import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import '../styles/welcome.css';
import '../styles/common.css';

const WelcomeScreen = () => {

  return (
    <div>
      <main className="main-wrap">
        <section className="wrapper">
          <h2 className="page-title"><FontAwesomeIcon icon={faRocket} size = "sm" style={{color: "#ffffff",}} /> Fiber Issues</h2>
          <h1 className="welcome-title">Welcome!</h1>
          <p className="welcome-phrase">A lot of issues are waiting for you!</p>
          <div className="wrap-content">
            <p>You are signed in as senyor pitu</p>
            <a className="google-login-btn" href="logout/">Log out</a>
            <p>Login with Google</p>
            <Link className="google-login-btn" to = "/main">

            </Link>
          </div>
          <p className="footer-phrase">This app won't solve your issues, but maybe it will help you manage them</p>
        </section>
      </main>

    </div>

    
  );
};

export default WelcomeScreen;
