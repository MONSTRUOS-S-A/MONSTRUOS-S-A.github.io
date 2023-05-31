import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/issueindex.css';
import '../styles/common.css';
import Header from '../components/Header';
import { IssuesList } from '../components/IssueList';
import { FilterForm } from '../components/FilterForm';


const MainScreen = () => {
  return (<div>
    <Header />
    <main>
      <section className="btn-section">
        <Link className="new-issue-btn" to="/new_issue">+ New issue</Link>
        <Link className="btn-bulk" to="/bulk_insert"><i className='bx bx-list-plus'></i> Bulk insert</Link>
      </section>
      <div className="main-wrap">
        <IssuesList />
      </div>
    </main>
  </div>
  );
};

export default MainScreen;