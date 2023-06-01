import React, { useState } from 'react';
import { addIssue } from '../API/issues.api';

export function NewIssueForm() {
  const [issueData, setIssueData] = useState({
    subject: '',
    description: '',
    status: 'New',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIssueData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addIssue(issueData)
      .then((response) => {
        console.log('Respuesta de la API:', response.data);
        // Resetear los campos del formulario si es necesario
        setIssueData({
          subject: '',
          description: '',
          status: 'New',
        });
      })
      .catch((error) => {
        console.error('Error al agregar el issue:', error);
      });
  };


  return (
    <form className="new-issue-form-wrap" onSubmit={handleSubmit}>
      <div className="top-section">
        <div className="left-section">
          <h4>Subject</h4>
          <input
            className="custom-input"
            name="subject"
            type="text"
            placeholder="Type the subject of your issue"
            value={issueData.subject}
            onChange={handleChange}
            required
          />
          <h4>Description</h4>
          <textarea
            className="custom-input"
            name="description"
            cols="30"
            rows="10"
            placeholder="Add here a description of what happens"
            value={issueData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="right-section">
          <h4>Status</h4>
          <select
            name="status"
            id="status"
            className="btn-drop"
            value={issueData.status}
            onChange={handleChange}
          >
            <option value="New">New</option>
            <option value="inprogress">In Progress</option>
            <option value="readyfortest">Ready For Test</option>
            <option value="closed">Closed</option>
            <option value="needsinfo">Needs Info</option>
          </select>
          <section className="types-selectors-wrap"></section>
        </div>
      </div>
      <button type="submit" className="btn-create-issue">
        CREATE
      </button>
    </form>
  );
}
