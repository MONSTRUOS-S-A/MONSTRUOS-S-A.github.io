import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/newissue.css';
import '../styles/common.css';
import Header from '../components/Header';
import { NewIssueForm } from '../components/NewIssueForm';

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
          <NewIssueForm />
        </section>
      </main>
    </div>
  );
};

export default NewIssue;
