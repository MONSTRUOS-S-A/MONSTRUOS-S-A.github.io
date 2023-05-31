import React from "react";

export function IssueCard({ issue }) {
  console.log(issue.blocked);
  return (
    <React.Fragment key={issue.issue_id}>
      {issue.blocked ? (
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
            <a className="link-issue" href="{% url 'issue_detail' issue.id %}">
              <p className="subject-id">#{issue.id}</p>
              <p className="subject-text">{issue.subject}</p>
              {issue.blocked && <i className="bx bx-lock-alt icon-row"></i>}
              {issue.deadline != null && <i className="bx bx-time-five icon-row" style={{ color: 'grey' }}></i>}
            </a>
          </td>
          <td>
            <p className="status">{issue.status}</p>
          </td>
          <td>
            <p className="created-date">{issue.date}</p>
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
            <a className="link-issue" href="{% url 'issue_detail' issue.id %}">
              <p className="subject-id">#{issue.id}</p>
              <p className="subject-text">{issue.subject}</p>
              {issue.blocked && <i className="bx bx-lock-alt icon-row"></i>}
              {issue.deadline != null && <i className="bx bx-time-five icon-row" style={{ color: 'grey' }}></i>}
            </a>
          </td>
          <td>
            <p className="status">{issue.status}</p>
          </td>
          <td>
            <p className="created-date">{issue.date}</p>
          </td>
        </tr>
      )}
      <tr className="tr-space"></tr>
    </React.Fragment>
  )

}