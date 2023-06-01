import React from 'react';

function IssueViewDescription({ issue }) {
  return (
    <article className="issue-description">
      <h4>Description</h4>
      <p>{issue.description}</p>
    </article>
  );
}

export default IssueViewDescription;