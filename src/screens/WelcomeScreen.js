import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import '../styles/welcome.css';
import '../styles/common.css';
import { getAllUsersAndTokens } from "../API/users.api";


const WelcomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsersAndTokens() {
      const res = await getAllUsersAndTokens();
      console.log(res)
      setUsers(res.data);
    };

    loadUsersAndTokens();
  }, []);

  return (
    <div>
      <main className="main-wrap">
        <section className="wrapper">
          <h2 className="page-title"><FontAwesomeIcon icon={faRocket} size = "sm" style={{color: "#ffffff",}} /> Fiber Issues</h2>
          <h1 className="welcome-title">Welcome!</h1>
          <p className="welcome-phrase">A lot of issues are waiting for you!</p>
          <div className="wrap-content">
            <select id="login_user" name="login_user">
              {
              users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.first_name} {user.last_name}
                </option>
              ))}
            </select>
            <a className="google-login-btn" href="logout/">Log out</a>
            <p>Login with Google</p>
            <Link className="google-login-btn" to = "/main">
                Log In
            </Link>
          </div>
          <p className="footer-phrase">This app won't solve your issues, but maybe it will help you manage them</p>
        </section>
      </main>

    </div>

    
  );
};

export default WelcomeScreen;
