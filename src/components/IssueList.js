import { getAllIssues } from "../API/issues.api";
import { IssueCard } from "../components/IssueCard"
import React, { useEffect, useState } from "react";


export function IssuesList() {
  const estatInicial = [];
  const [issues, setIssues] = useState(estatInicial);

  useEffect(() => {
    async function loadIssues() {
      const res = await getAllIssues();
      console.log(res.data);
      setIssues(res.data);
    }
    loadIssues();
  }, []);

  if (issues === estatInicial) {
    return (
      <div className="no-issue-msg">
        <p>No issues yet</p>
        <i className='bx bx-happy-beaming'></i>
      </div>
    )
  } else return (
    <div className="issues-list-container">
      <table>
        <tbody>
          <tr>
            <th className="circle-tag-head">Type</th>
            <th className="circle-tag-head">Severity</th>
            <th className="circle-tag-head">Priority</th>
            <th className="standard-head">Subject</th>
            <th className="standard-head">Status</th>
            <th className="standard-head">Created</th>
            <th className="standard-head">Assigned</th>
          </tr>
          {
            issues.map((issue) => (
              <IssueCard key={issue.issue_id} issue={issue} />
            ))
          }
        </tbody>
      </table>
    </div >
  );
}