import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function IssueViewTittle({ issue }) {
  const { authUser } = useAuth();
  return (
    <header className="issue-header-wrap">
      <section className="issue-title-header">
        <div className="left-title-wrap">
          <h1 className="issue-number">#{issue.issue_id}</h1>
          <h1>{issue.subject}</h1>
          {issue.deadline_date != null && (
            <div className="duedate-wrap">
              <i className="bx bx-time-five"></i>
              <p>{issue.deadline_date}</p>
            </div>
          )}
        </div>

        {(issue.is_blocked === false ||
          (issue.issue_blocking_user.id === authUser.id &&
            issue.is_blocked === true)) && (
            <Link
              id="edit-issue"
              className="btn-setting"
              href={`/${issue.issue_id}/edit`}
            >
              Edit<i className="bx bx-edit"></i>
            </Link>
          )}
      </section>
      <h5>ISSUE</h5>
      {issue.is_blocked === true && (
        <div className="blocked-wrap">
          <strong>
            <i className="bx bx-lock-alt"></i>Blocked
          </strong>
          <p>
            This issue is currently blocked by{" "}
            {issue.issue_blocking_user.first_name}
          </p>
        </div>
      )}
      <div className="issue-title-footer">
        <div className="tag-section">
          <article className="tag">problemon</article>
          <article className="tag">tusmu</article>
          <button className="btn-add-tag">Add tag +</button>
        </div>
        <div className="created-by-wrap">
          <div className="created-by-text">
            <p>
              Created by{" "}
              {`${issue.issue_creator_user.first_name} ${issue.issue_creator_user.last_name}`}
            </p>
            <p className="created-date-issue">{issue.creation_date_time}</p>
          </div>

          <Link to={`/user_page/${issue.issue_creator_user.id}/`}>
            <img
              className="profile-img"
              src={issue.issue_creator_user.profile_picture}
              alt=""
            />
          </Link>
        </div>
      </div>
    </header>
  );
}