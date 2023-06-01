import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import '../styles/welcome.css';
import '../styles/common.css';
import '../styles/settings.css';
import Header from '../components/Header';
import { getUser } from '../API/issues.api';
import { useParams } from 'react-router-dom';

const UserPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const estatInicial = [];
    const [content, setContent] = useState(estatInicial);
  
    useEffect(() => {
      async function loadIssues() {
        const res = await getUser(id);
        console.log(res.data);
        setContent(res.data);
      }
      loadIssues();
    }, []);
    
    const handleGoBack = () => {
        navigate('/main');
    };

    const handleGoTimeline= () => {
        navigate(`/user_detail/${id}`);
    };

    const handleGoEdit= () => {
        navigate(`/edit_profile/${id}`);
    };

    return (
        
    <div>
        <Header />
        <main className="edit-main-wrap" style={{ marginTop: '50px' }}>
            <p className="edit-info-text">This is what we know about you!</p>
            <div className="wrap-edit-content">
            <div className="edit-wrapview">
                <section className="left-edit-content">
                {/* Image */}
                <div>
                    <img
                    id="profile picture"
                    className="profile-img-edit"
                    src={content.profile_picture}
                    alt=""
                    />
                </div>
                </section>
                <section className="right-edit-content">
                {/* Username */}
                <h4>Username</h4>
                <input
                    className="custom-input"
                    type="text"
                    value= {content.username}
                    disabled
                />

                {/* First & second name (might not have any value) */}
                <h4>First Name</h4>
                <input
                    className="custom-input"
                    type="text"
                    value={content.first_name}
                    disabled
                />

                <h4>Last Name</h4>
                    <input
                    className="custom-input"
                    type="text"
                    value={content.last_name}
                    disabled
                    />

                {/* Email */}
                <h4>Email</h4>
                <input
                    className="custom-input"
                    type="text"
                    value={content.email}
                    disabled
                />

                {/* Bio */}
                <h4>Bio</h4>
                <textarea
                    className="custom-input"
                    name="new_bio"
                    maxLength="200"
                    value={content.bio}
                    
                    disabled
                    
                >   
                </textarea>

                {/* Buttons */}
                <div className="edit-btn-section">
                    <button
                    type="submit"
                    className="btn-go-back"
                    style={{ cursor: 'pointer' }}
                    onClick={handleGoBack}
                    >
                    <i className="bx bx-arrow-back"></i>
                    Go back
                    </button>
                    <a className="btn-go-back" onClick={handleGoTimeline}>
                    View timeline
                    </a>
                    <a className="btn-go-back" onClick={handleGoEdit}>
                        <i className="bx bxs-edit"></i> Edit profile
                    </a>
                </div>
                </section>
            </div>
            </div>
        </main>
      </div>
    );
};

export default UserPage;