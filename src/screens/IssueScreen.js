import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import '../styles/issue.css';
import '../styles/common.css';
import Header from '../components/Header';
import { getIssueDetailed } from '../API/issues.api';
import { getAttachments } from '../API/issues.api';
import { getActivities } from '../API/issues.api';
import { getComments } from '../API/issues.api';
import React, { useEffect, useState } from "react";
import { useAuth } from '../context/AuthContext';
import { IssueViewTittle } from '../components/IssueViewTittle';
import IssueViewDescription from '../components/IssueViewDescription';

const IssueScreen = () => {

  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn } = useAuth()

  const { id } = useParams();
  const [issue, setIssue] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [activities, setActivities] = useState([]);
  const [comments, setComments] = useState([]);

  const [type, setType] = useState('');
  const [severity, setSeverity] = useState('');
  const [priority, setPriority] = useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSeverityChange = (event) => {
    setSeverity(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const issueResponse = await getIssueDetailed(id);
        setIssue(issueResponse.data);

        const attachmentsResponse = await getAttachments(id);
        setAttachments(attachmentsResponse.data);

        const activitiesResponse = await getActivities(id);
        setActivities(activitiesResponse.data);

        const commentsResponse = await getComments(id);
        setComments(commentsResponse.data);

        setType(issue.type);
        setSeverity(issue.severity);
        setPriority(issue.priority);



      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [id]);

  if (!issue) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <Header />
      <main className="main-issue">
        <section className="issue-wrap">
          <IssueViewTittle issue={issue} />
          {/**PARTE DE LA DESCRIPTION */}
          <IssueViewDescription issue={issue} />

          {/**PARTE DE ATACHMENTS */}
          <div className="attachments-section">
            <div className="attachments-field">
              <p>{attachments.length} attachments</p>

              <form className="attachment-form-wrap" method="POST" encType="multipart/form-data">
                {/* Coloca aquí el token CSRF si es necesario */}

                <button className="btn-upload" type="submit">Upload</button>
              </form>
            </div>

            <div className="attachments-wrap">
              {attachments.map((attachment) => (
                <div className="attachment" key={attachment.pk}>
                  <Link to={attachment.attachment_file} className="attachment-name" target="_blank" download>
                    <i className="bx bx-paperclip bx-rotate-90"></i>
                    {attachment.attachment_name}
                  </Link>

                  <form method="POST" action={`/delete_attachment/${attachment.pk}`}>
                    {/* Coloca aquí el token CSRF si es necesario */}
                    <button className="btn-delete-attachment" type="submit">
                      <i className="bx bx-trash"></i>
                      Delete
                    </button>
                  </form>
                </div>
              ))}
            </div>
          </div>

          {/**PARTE DE activities */}
          <section className="activities-wrap">
            <p>{activities.length} activities</p>
            {activities.map((activity) => (
              <article className="activitie">
                <Link to={`/user_page/${activity.activity_author.id}/`}>
                  <img className="profile-img" src={activity.activity_author.profile_picture} alt="" />
                </Link>
                <div className="activitie-main">
                  <div className="activitie-header">
                    <p className="name-activitie">{`${activity.activity_author.first_name}  > ${activity.activity_author.first_name}`}</p>
                    <p className="date-activie">{activity.creation_date_time}</p>
                  </div>
                  <div className="activity-status">
                    <p className="activity-tag">{activity.action}</p>
                    {activity.action === 'MOD' && (
                      <>
                        <p>STATUS: {activity.a5}  &gt; {activity.a6}</p>
                        <p>SUBJECT: {activity.a1}  &gt; {activity.a2}</p>
                        <p>DESCRIPTION: {activity.a3}  &gt; {activity.a4}</p>
                      </>
                    )}
                    {activity.action === 'PRY' && (
                      <p className="first-field">{activity.a1}  &gt; {activity.a2}</p>
                    )}
                    {activity.action === 'SEV' && (
                      <p className="first-field">{activity.a1}  &gt; {activity.a2}</p>
                    )}
                    {activity.action === 'TYP' && (
                      <p className="first-field">{activity.a1}  &gt; {activity.a2}</p>
                    )}
                    {activity.action === 'TAG' && (
                      <p className="first-field">{activity.a1}</p>
                    )}
                    {activity.action === 'AAT' && (
                      <p className="first-field">{activity.a1}</p>
                    )}
                    {activity.action === 'DAT' && (
                      <p className="first-field">{activity.a1}</p>
                    )}
                    {activity.action === 'ASS' && (
                      <p className="first-field">{activity.a1}  &gt; {activity.a2}</p>
                    )}
                    {activity.action === 'BCK' && (
                      <p className="first-field">{activity.a1} &gt; {activity.a2}</p>
                    )}
                    {activity.action === 'DUE' && (
                      <p className="first-field">{activity.a7}  &gt; {activity.a8}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/**Parte de comentarios */}
          <section className="activities-wrap">
            <p>{comments.length} comments</p>
            {comments.map(comment => (
              <article className="activitie" key={comment.comment_author}>
                <Link to={`/user_page/${comment.comment_author.id}/`}>
                  <img className="profile-img" src={comment.comment_author.profile_picture} alt="" />
                </Link>
                <div className="activitie-main">
                  <div className="activitie-header">
                    <p className="name-activitie">{`${comment.comment_author.first_name} ${comment.comment_author.last_name}`}</p>
                    <p className="date-activitie">{comment.creation_date_time}</p>
                  </div>
                  <small>{comment.comment_content}</small>
                </div>
              </article>
            ))}
            <hr />
            <div className="comment-field">
              <small><i className="bx bx-chat"></i> Add your comment</small>
              <div className="comment-form-wrap">
                <img className="profile-img" src={authUser.profile_picture} alt="" />
                <form className="comment-form" method="post">
                  {
                    /**
                     * <input type="hidden" name="csrfmiddlewaretoken" value={} />
                  
                     */
                  }
                  <input className="custom-input" type="text" name="content" placeholder='Say something!' />

                  {/*commentForm.content.errors && <p className="text-danger">{commentForm.content.errors}</p>*/}
                  <button type="submit" className="btn-post-comment"><i className="bx bx-send"></i> Post</button>
                </form>
              </div>
            </div>
          </section>
        </section>

        {/**PART DRETA DE LA PANTALLA */}
        <section className="issue-right-side">
          <section className="types-selectors-wrap">
            <article className="card-type">
              <p className="text-title">type</p>
              <div className="right-card-wrap">
                <form className="select-form" method="post">
                  <select name="type" id="type" onChange={handleTypeChange} value={type} className="btn-type">
                    <option value="Bug">Bug</option>
                    <option value="Question">Question</option>
                    <option value="Enhancement">Enhancement</option>
                  </select>
                </form>
                <div className={`circle-tag ${type === 'Bug' ? 'type-bug' : type === 'Question' ? 'type-question' : 'type-enhancement'}`}></div>
              </div>
            </article>
            <article className="card-type">
              <p className="text-title">severity</p>
              <div className="right-card-wrap">
                <form className="select-form" method="post">
                  <select name="severity" id="severity" onChange={handleSeverityChange} value={severity} className="btn-type">
                    <option value="Wishlist">Wishlist</option>
                    <option value="Minor">Minor</option>
                    <option value="Normal">Normal</option>
                    <option value="Important">Important</option>
                    <option value="Critical">Critical</option>
                  </select>
                </form>
                <div className={`circle-tag ${severity === 'Wishlist' ? 'sev-wishlist' : severity === 'Minor' ? 'sev-minor' : severity === 'Normal' ? 'sev-normal' : severity === 'Important' ? 'sev-important' : 'sev-critical'}`}></div>
              </div>
            </article>
            <article className="card-type">
              <p className="text-title">priority</p>
              <div className="right-card-wrap">
                <form className="select-form" method="post">
                  <select name="priority" id="priority" onChange={handlePriorityChange} value={priority} className="btn-type">
                    <option value="Low">Low</option>
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                  </select>
                </form>
                <div className={`circle-tag ${priority === 'Low' ? 'prio-low' : priority === 'Normal' ? 'prio-normal' : 'prio-high'}`}></div>
              </div>
            </article>
          </section>
        </section>
        <hr />

        {/**PARTE DE ASIGNED  */}

        <section className="asigned-to-section">
          <p>Watchers</p>
          <div className="asigned-to-section-wrap">
            {/*
            issue.issue_watchers.map(watcher => (
              <div className="asigned-to-content" key={watcher.id}>
                <Link to={`/user_page/${watcher.id}/`}>
                  <img className="profile-img" src={watcher.profile_picture} alt="" />
                </Link>

               
                  
               
                <small>{watcher.auth_user.first_name} {watcher.auth_user.last_name}</small>
                {(issue.is_blocked === false || issue.issue_blocking_user.id === authUser.id) && issue.is_blocked === true && (
                  <form method="post" style={{ marginLeft: "auto" }}>
                    <input type="hidden" name="new_watcher" value={`-${watcher.auth_user.pk}`} />
                    <button type="submit" className="btn-setting" style={{ marginLeft: "auto" }}>
                      <i className="bx bx-eraser"></i>
                    </button>
                  </form>
                )}
              </div>
            ))}
            {issue.issue_watchers.length === 0 && (
              <div className="asigned-to-content">
                <img className="profile-img" src={}alt="" />
                <small style={{ fontStyle: "italic" }}>Not Assigned</small>
              </div>
            )}
          </div>
            {/*(issue.blocked === false || issue.userblocker.auth_user === actual_user.auth_user) && issue.blocked === true && (
              <div className="asignation-buttons-wrap">
                <form method="post">
                  <select name="new_watcher" id="new_watcher" onChange={handleWatcherChange} className="btn-asignation">
                    <option value="" selected disabled hidden>Assign new watcher</option>
                    {all_users.map(user => (
                      <option value={user.pk} key={user.pk}>
                        {user.auth_user.first_name} {user.auth_user.last_name}
                      </option>
                    ))}
                  </select>
                </form>
                <form method="post">
                  <input type="hidden" name="new_watcher" value={user_is_watcher ? `-${request.user.pk}` : request.user.pk} />
                  <button type="submit" className="btn-asignation">
                    <i className={`bx ${user_is_watcher ? 'bx-hide' : 'bx-show'}`}></i>
                    {user_is_watcher ? 'Unwatch' : 'Watch'}
                  </button>
                </form>
                */}
          </div>



        </section>



      </main>
    </div>
  );
};

export default IssueScreen;
