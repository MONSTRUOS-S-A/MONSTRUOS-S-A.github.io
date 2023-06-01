import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import '../styles/welcome.css';
import '../styles/common.css';
import { getAllUsersAndTokens } from '../API/users.api';
import { useAuth } from '../context/AuthContext';


const WelcomeScreen = () => {
  const [users, setUsers] = useState([]);
  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn } = useAuth()

  useEffect(() => {
    async function loadUsersAndTokens() {
      const res = await getAllUsersAndTokens();
      setUsers(res.data);
    };

    loadUsersAndTokens();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Get the selected user
    setIsLoggedIn(true)
    let selectedUserId = e.target.value.toString();
    const newUser = users.find((user) => user.id.toString() === selectedUserId);

    // Set the selected user globally

    setAuthUser(newUser);
    // Redirect to the main screen or another screen
  };

  return (
    <div>
      <main className="main-wrap">
        <section className="wrapper">
          <h2 className="page-title"><FontAwesomeIcon icon={faRocket} size = "sm" style={{color: "#ffffff",}} /> Fiber Issues</h2>
          <h1 className="welcome-title">Welcome!</h1>
          <p className="welcome-phrase">A lot of issues are waiting for you!</p>
          <div className="wrap-content">
            <select id="login_user" name="login_user" onChange={handleLogin}>
              <option selected="true" disabled="disabled">  -- Select User --</option>    
              {
              users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.first_name} {user.last_name}
                </option>
              ))}
            </select>
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
