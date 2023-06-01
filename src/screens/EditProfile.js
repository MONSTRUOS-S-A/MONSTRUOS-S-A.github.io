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

const EditProfile = () => {

    const {id} = useParams();
    const [inputs, setInputs] = useState({});
    const [content, setContent] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function loadIssues() {
          const res = await getUser(id);
          setContent(res.data);
        }
        loadIssues();
      }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleGoProfile= () => {
        navigate(`/user_page/${id}`);
    };

    const handleSubmit = (event) => {
        const data = {
            new_bio: inputs.new_bio,
            new_profile_picture: inputs.new_profile_picture,
        };
        postEditProfile(id, data);
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
                        <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />
                        <label htmlFor="file-upload" className="btn-select-change-avatar">
                        <input
                            type="file"
                            id="file-upload"
                            name="new_profile_picture"
                            style={{ display: 'none' }}
                            onChange={() => {}}
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
                    <form onSubmit={handleSubmit} method='put'>
                        <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />
                        <textarea
                            className="custom-input"
                            name="new_bio"
                            maxLength="200"
                            value={inputs.new_bio || ""}
                            required
                            onChange={handleChange}
                        ></textarea>
                        {/* Buttons */}
                        <div className="edit-btn-section">
                            <a className="btn-go-back" href="/user_page/">
                            <i className="bx bx-arrow-back" onClick={handleGoProfile}></i> Go back
                            </a>
                            <button type="submit" className="btn-go-back" style={{ marginLeft: '10px', cursor: 'pointer' }}>
                            <i className="bx bxs-save"></i>Save changes
                            </button>
                        </div>
                    </form>
                </section>
                </div>
            </div>
            </main>
        </div>
    );
};

export default EditProfile;