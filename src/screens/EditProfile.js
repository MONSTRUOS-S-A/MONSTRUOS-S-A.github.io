import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import '../styles/common.css';
import '../styles/settings.css';
import Header from '../components/Header';
import { postEditProfile } from '../API/issues.api';
import { useParams } from 'react-router-dom';
import { getUser } from '../API/issues.api';
import { useAuth } from '../context/AuthContext';
import { waitFor } from '@testing-library/react';


const EditProfile = () => {
    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn } = useAuth()

    const {id} = useParams();
    const [inputs, setInputs] = useState({});
    const [content, setContent] = useState({});
    const [bio, setBio] = useState('');
    const [newProfilePicture, setNewProfilePicture] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadIssues() {
          const res = await getUser(id);
          setContent(res.data);
          setBio(res.data.bio || '');
        }
        loadIssues();
      }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBio(value);
    }

    const handleImageSubmit = async (event) => {
        const file = event.target.files[0];
        try {
            await postEditProfile(id, bio, file, authUser.api_token);
            navigate(`/user_page/${id}`);
        } catch (error) {console.error(error);}
    }

    const handleGoProfile= () => {
        navigate(`/user_page/${id}`);
    };

    const handleSubmit = async (event) => {
        try {
            await postEditProfile(id, bio, newProfilePicture, authUser.api_token);
            navigate(`/user_page/${id}`);
        } catch (error) {console.error(error);}
    }

    return (
        <div>
            <Header/>
            <main className="edit-main-wrap" style={{ marginTop: '50px' }}>
            <p className="edit-info-text">Edit your profile bio and avatar!</p>
            <div className="wrap-edit-content">
                <div className="edit-wrap">
                <section className="top-section"></section>
                <section className="left-edit-content">
                    {/* Image */}
                    <div>
                    <h4 style={{ textAlign: 'center' }}>Avatar </h4>
                    <img
                        id="profile picture"
                        className="profile-img-edit"
                        src={content.profile_picture}
                        alt="Profile picture"
                    />

                    {/* Upload New Image */}
                    <form method="post" encType="multipart/form-data">
                        <label htmlFor="file-upload" className="btn-select-change-avatar">
                        <input
                            type="file"
                            id="file-upload"
                            name="new_profile_picture"
                            style={{ display: 'none' }}
                            onChange={handleImageSubmit}
                        />
                        <i className="bx bx-image-alt"></i> Change
                        </label>
                    </form>
                    </div>
                </section>
                <section className="right-edit-content">
                    {/* Username */}
                    <h4>Username </h4>
                    <input className="custom-input" type="text" value={content.username} disabled />

                    {/* First & second name (might not have any value) */}
                    <h4>First Name </h4>
                    <input
                    className="custom-input"
                    type="text"
                    value={content.first_name}
                    disabled
                    />

                    <h4>Last Name </h4>

                    <input
                        className="custom-input"
                        type="text"
                        value={content.last_name}
                        disabled
                    />

                    {/* email */}
                    <h4>Email </h4>
                    <input className="custom-input" type="text" value={content.email} disabled />

                    {/* Bio */}
                    <h4>Bio </h4>
                    <textarea
                        className="custom-input"
                        name="new_bio"
                        maxLength="200"
                        value={bio}
                        required
                        onChange={handleChange}
                    ></textarea>
                    {/* Buttons */}
                    <div className="edit-btn-section">
                        <a className="btn-go-back" onClick={handleGoProfile}>
                        <i className="bx bx-arrow-back"></i> Go back
                        </a>
                        <a className="btn-go-back" style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={handleSubmit}>
                        <i className="bx bxs-save"></i>Save changes
                        </a>
                    </div>
                </section>
                </div>
            </div>
            </main>
        </div>
    );
};

export default EditProfile;