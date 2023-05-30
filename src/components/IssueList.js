import { getAllIssues } from "../API/issues.api";
import { IssueCard } from "../components/IssueCard"
import React, { useEffect, useState } from "react";


export function IssuesList() {

  const estatInicial = [];
  const [issues, setIssue] = useState(estatInicial);

  useEffect(() => {
    async function loadIssues() {
      const res = await getAllIssues();
      console.log(res.data);
      setIssue(res.data);
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
    <div>
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
        </tbody>
      </table>
      {//Aixo esta posat fora per provar si funciona
        issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))
      }
    </div >
  );
}