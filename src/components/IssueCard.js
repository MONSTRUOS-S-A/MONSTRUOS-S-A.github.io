export function IssueCard(issue) {
  return (
    <div key={issue.id}>AAAAA</div>
  )


  /*<React.Fragment key={issue.id}>
  {issue.blocked === true ? (
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
          {issue.blocked === true && <i className="bx bx-lock-alt icon-row"></i>}
          {issue.deadline != null && <i className="bx bx-time-five icon-row" style={{ color: 'grey' }}></i>}
        </a>
      </td>
      <td>
        <p className="status">{issue.status}</p>
      </td>
      <td>
        <p className="created-date">{issue.date}</p>
      </td>
      <td>
        <div className="asigned-to-wrap">
          {issue.assigned_user === null ? (
            <React.Fragment>
              <img className="asigned-to-img" src="{% static 'myapp/img/nouser.png' %}" alt="" />
              <i className="asigned-to-text"> Not Assigned </i>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <a href={`/user_page/${issue.assigned_user.auth_user.pk}/`}>
                <img className="asigned-to-img" src={issue.assigned_user.img_src.url} alt="" />
              </a>
              <p className="asigned-to-text">{`${issue.assigned_user.auth_user.first_name} ${issue.assigned_user.auth_user.last_name}`}</p>
            </React.Fragment>
          )}
        </div>
      </td>
    </tr>
  ) : (
    <tr className="inner-tr">
      
    </tr>
  )}
  <tr className="tr-space"></tr>
</React.Fragment>
*/

}