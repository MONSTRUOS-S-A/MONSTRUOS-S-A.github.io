import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import '../styles/welcome.css';
import '../styles/common.css';
import '../styles/issue.css';
import '../styles/timeline.css';
import Header from '../components/Header';

const EditIssue = () => {
    return (
        <div>
            <Header />
        <main className="main-issue">
          <section className="issue-wrap">
            {/* Header */}
            <header className="issue-header-wrap">
              <section className="issue-title-header">
                <div className="edit-title-wrap">
                  <h1>ISSUE</h1>
                  <h1 className="issue-number"> "123456" </h1>
                </div>
              </section>
              <div className="issue-title-footer">
                <p>Edit the fields and then press the button to save your changes</p>
              </div>
            </header>
    
            {/* Issue Form */}
            <form method="POST" action={{}}>
              {/* Django CSRF Token */}
    
              <article className="issue-description">
                <h4>Status:</h4>
                <select name="status" id="status">
                  <option value="New">New</option>
                  <option value="inprogress">In Progress</option>
                  <option value="readyfortest">Ready For Test</option>
                  <option value="closed">Closed</option>
                  <option value="needsinfo">Needs Info</option>
                </select>
    
                <h4>Subject</h4>
                <input
                  className="custom-input"
                  type="text"
                  name="subject"
                  value="Hola que tal?"
                />
    
                <h4>Description</h4>
                <textarea
                  className="custom-input textarea-field"
                  name="description"
                  value="Muyyyy buenas tarde a todo"
                ></textarea>
              </article>
    
              <div className="wrap-save-button">
                <button type="submit" className="btn-save-changes">
                  <i className="bx bxs-save"></i>Save changes
                </button>
              </div>
            </form>
          </section>
        </main>
        </div>
      );
};
export default EditIssue;