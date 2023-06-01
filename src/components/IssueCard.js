import React from "react";
import { Link } from "react-router-dom";

export function IssueCard({ issue }) {
  return (
    <React.Fragment key={issue.issue_id}>
      {issue.is_blocked ? (
        <tr className="inner-tr-blocked">
          <td className="row-table">
            <div className={`circle-tag ${issue.type === 'Bug' ? 'type-bug' : issue.type === 'Question' ? 'type-question' : 'type-enhancement'}`}></div>
          </td>
          <td className="row-table">
            <div className={`circle-tag ${issue.severity === 'Wishlist' ? 'sev-wishlist' : issue.severity === 'Minor' ? 'sev-minor' : issue.severity === 'Normal' ? 'sev-normal' : issue.severity === 'Important' ? 'sev-important' : 'sev-critical'}`}></div>
          </td>
          <td className="row-table">
            <div className={`circle-tag ${issue.priority === 'Low' ? 'prio-low' : issue.priority === 'Normal' ? 'prio-normal' : 'prio-high'}`}></div>
          </td>
          <td>
            <Link className="link-issue" to={`issue/${issue.issue_id}`}>
              <p className="subject-id">#{issue.id}</p>
              <p className="subject-text">{issue.subject}</p>
              {issue.is_blocked && <i className="bx bx-lock-alt icon-row"></i>}
              {issue.deadline != null && <i className="bx bx-time-five icon-row" style={{ color: 'grey' }}></i>}
            </Link>
          </td>
          <td>
            <p className="status">{issue.status}</p>
          </td>
          <td>
            <p className="created-date">{issue.date}</p>
          </td>
          <td>
            {issue.issue_assigned_user ? (
              <div className="asigned-to-wrap">
                <Link to={`/user_page/${issue.issue_assigned_user.id}/`}>
                  <img className="asigned-to-img" src={issue.issue_assigned_user.profile_picture} alt="" />
                </Link>
                <p className="asigned-to-text">{`${issue.issue_assigned_user.first_name} ${issue.issue_assigned_user.last_name}`}</p>
              </div>
            ) : (
              <div className="asigned-to-wrap">
                <img className="asigned-to-img" src="https://wazowski-asw-s3-bucket.s3.eu-west-3.amazonaws.com/static/myapp/img/nouser.png" />
                <p className="asigned-to-text">Not Assigned</p>
              </div>
            )}
          </td>
        </tr>
      ) : (
        <tr className="inner-tr">
          <td className="row-table">
            <div className={`circle-tag ${issue.type === 'Bug' ? 'type-bug' : issue.type === 'Question' ? 'type-question' : 'type-enhancement'}`}></div>
          </td>
          <td className="row-table">
            <div className={`circle-tag ${issue.severity === 'Wishlist' ? 'sev-wishlist' : issue.severity === 'Minor' ? 'sev-minor' : issue.severity === 'Normal' ? 'sev-normal' : issue.severity === 'Important' ? 'sev-important' : 'sev-critical'}`}></div>
          </td>
          <td className="row-table">
            <div className={`circle-tag ${issue.priority === 'Low' ? 'prio-low' : issue.priority === 'Normal' ? 'prio-normal' : 'prio-high'}`}></div>
          </td>
          <td>
            <Link className="link-issue" to={`issue/${issue.issue_id}`}>
              <p className="subject-id">#{issue.id}</p>
              <p className="subject-text">{issue.subject}</p>
              {issue.is_blocked && <i className="bx bx-lock-alt icon-row"></i>}
              {issue.deadline != null && <i className="bx bx-time-five icon-row" style={{ color: 'grey' }}></i>}
            </Link>
          </td>
          <td>
            <p className="status">{issue.status}</p>
          </td>
          <td>
            <p className="created-date">{issue.date}</p>
          </td>
          <td>
            {issue.issue_assigned_user ? (
              <div className="asigned-to-wrap">
                <Link to={`/user_page/${issue.issue_assigned_user.id}/`}>
                  <img className="asigned-to-img" src={issue.issue_assigned_user.profile_picture} alt="" />
                </Link>
                <p className="asigned-to-text">{`${issue.issue_assigned_user.first_name} ${issue.issue_assigned_user.last_name}`}</p>
              </div>
            ) : (
              <div className="asigned-to-wrap">
                <img className="asigned-to-img" src="https://wazowski-asw-s3-bucket.s3.eu-west-3.amazonaws.com/static/myapp/img/nouser.png" />
                <p className="asigned-to-text">Not Assigned</p>
              </div>
            )}
          </td>
        </tr>
      )}
      <tr className="tr-space"></tr>
    </React.Fragment>
  )

}