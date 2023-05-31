import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import '../styles/issue.css';
import '../styles/common.css';
import '../styles/timeline.css';
import Header from '../components/Header';
import { getUserActivities } from '../API/issues.api';
import { getUserDetail } from '../API/issues.api';
import { useParams } from 'react-router-dom';

const UserTimelines = () => {

    const {id} = useParams();

    const estatInicial = [];
    const [content1, setContent1] = useState(estatInicial);
    const [content2, setContent2] = useState(estatInicial);
  
    useEffect(() => {
      async function loadInfo() {
        const res1 = await getUserActivities(id);
        const res2 = await getUserDetail(id);
        setContent1(res1.data);
        setContent2(res2.data);
      }
      loadInfo();
    }, []);

    return (    
        <div>
            <Header />
            <main className="main-timelines" style={{ width: 'auto', height: 'auto', display: 'contents' }}>
            <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '75px' }}>
                <h1>Activities</h1>
                {content1.map((activity, index) => (
                <div className="activity" key={index}>
                    <article className="activitie">
                    <div className="activity-status">
                        <p className="activitie">{activity.issue_id}</p>
                        <p className="activity-tag">{activity.get_action_display}</p>
                        {activity.action === 'MOD' && (
                        <>
                            <p>STATUS: {activity.at5} == {activity.at6}</p>
                            <p>SUBJECT: {activity.at1} == {activity.at2}</p>
                            <p>DESCRIPTION: {activity.at3} == {activity.at4}</p>
                        </>
                        )}

                        {activity.action === 'PRY' && (
                        <p className="first-field">{activity.at1} == {activity.at2}</p>
                        )}

                        {activity.action === 'SEV' && (
                        <p className="first-field">{activity.at1} == {activity.at2}</p>
                        )}

                        {activity.action === 'TYP' && (
                        <p className="first-field">{activity.at1} == {activity.at2}</p>
                        )}

                        {activity.action === 'TAG' && (
                        <p className="first-field">{activity.at1}</p>
                        )}

                        {activity.action === 'AAT' && (
                        <p className="first-field">{activity.at1}</p>
                        )}

                        {activity.action === 'DAT' && (
                        <p className="first-field">{activity.at1}</p>
                        )}

                        {activity.action === 'ASS' && (
                        <p className="first-field">{activity.at1} == {activity.at2}</p>
                        )}

                        {activity.action === 'BCK' && (
                        <p className="first-field">{activity.at1} == {activity.at2}</p>
                        )}

                        {activity.action === 'DUE' && (
                        <p className="first-field">{activity.at7} == {activity.at8}</p>
                        )}
                    </div>
                    </article>
                </div>
                ))}
                <h1 style={{ marginTop: '50px' }}>Watching</h1>
                {content2.map((watching, index) => (
                <div className="activity" key={index}>
                    <p>{watching.subject}</p>
                </div>
                ))}
            </div>
            </main>
        </div>
    );
};

export default UserTimelines;