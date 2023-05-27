import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/newissue.css';
import '../styles/common.css';
import Header from '../components/Header';

const NewIssue = () => {
  return (
    <div>
      <Header />
      <main className="new-issue-main">
        <section className="new-issue-section">
          <header className="new-issue-header">
            <h2>New issue</h2>
            <a className="close-create-issue-btn" href="/issue_index">
              <i className='bx bx-x'></i>
            </a>
          </header>
          <form className="new-issue-form-wrap" method="post">
            <div className="top-section">
              <div className="left-section">
                <h4>Subject</h4>
                <input className="custom-input" name="subject" type="text" placeholder="Type the subject of your issue" required />
                <h4>Description</h4>
                <textarea className="custom-input" name="description" id="" cols="30" rows="10" placeholder="Add here a description of what happens" required></textarea>
              </div>
              <div className="right-section">
                <h4>Status</h4>
                <select name="status" id="status" className="btn-drop">
                  <option value="New">New</option>
                  <option value="inprogress">In Progress</option>
                  <option value="readyfortest">Ready For Test</option>
                  <option value="closed">Closed</option>
                  <option value="needsinfo">Needs Info</option>
                </select>
                <section className="types-selectors-wrap"></section>
              </div>
            </div>
            <button className="btn-create-issue">CREATE</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewIssue;
