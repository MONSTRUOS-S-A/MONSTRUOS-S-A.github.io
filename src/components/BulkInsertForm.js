import React, { useState } from 'react';
import { bulkInsertIssues } from '../API/issues.api';

export function BulkInsertForm() {
  const [issueNames, setIssueNames] = useState('');

  const handleChange = (event) => {
    setIssueNames(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const namesArray = issueNames.split('\n').map((name) => name.trim()).filter((name) => name !== '');
    const bulkInsertData = {
      issues: namesArray,
    };

    bulkInsertIssues(bulkInsertData)
      .then((response) => {
        console.log('Respuesta de la API:', response.data);
        setIssueNames('');
      })
      .catch((error) => {
        console.error('Error al realizar el bulk insert:', error);
      });
  };

  return (
    <form className="new-issue-form-wrap" onSubmit={handleSubmit}>
      <div className="top-section">
        <div className="left-section">
          <p>Type below the name of the issues</p>
          <textarea
            className="custom-input"
            name="description"
            cols="30"
            rows="10"
            placeholder="One item per line..."
            value={issueNames}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="btn-create-issue">
        CREATE
      </button>
    </form>
  );
}