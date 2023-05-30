import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/issueindex.css';
import '../styles/common.css';
import Header from '../components/Header';
import { IssuesList } from '../components/IssueList';


const MainScreen = () => {
  return (<div>
    <Header />
    <main>
      <section className="btn-section">
        <Link className="new-issue-btn" to="/new_issue">+ New issue</Link>
        <Link className="btn-bulk" to="/bulk_insert"><i className='bx bx-list-plus'></i> Bulk insert</Link>
      </section>

      <div className="main-wrap">
        <section className="filter-section">
          <form method="POST">
            <div className="inline-form"><small>Contains word</small></div>
            <div className="inline-form"><small>Orders by</small></div>
            <br />
            <div className="inline-form"><small>Status</small></div>
            <div className="inline-form"><small>Priority</small></div>
            <div className="inline-form"><small>Unassigned</small></div>
            <div className="inline-form"><small>Assigned to</small></div>
            <div className="inline-form"><small>Created by</small></div>
            <button className="btn-search-filter" type="submit"><i className='bx bx-search-alt-2'></i> Search</button>
          </form>
        </section>
        <section className="main-table">
          <IssuesList />
        </section>
      </div>
    </main>
  </div>
  );
};

export default MainScreen;