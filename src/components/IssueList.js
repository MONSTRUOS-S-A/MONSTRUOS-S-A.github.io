import { getAllIssues } from "../API/issues.api";
import { IssueCard } from "../components/IssueCard"
import { FilterForm } from "./FilterForm";
import React, { useEffect, useState } from "react";


export function IssuesList() {
  const estatInicial = [];
  const [issues, setIssues] = useState(estatInicial);



  /*useEffect(() => {
    async function loadIssues() {
      const res = await getAllIssues();
      console.log(res.data);
      setIssues(res.data);
    }
    loadIssues();
  }, []);*/
  const handleSearch = (filteredIssues) => {
    setIssues(filteredIssues.data);
  };

  return (

    <div className="issues-list-container">
      <FilterForm onSearch={handleSearch} />
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