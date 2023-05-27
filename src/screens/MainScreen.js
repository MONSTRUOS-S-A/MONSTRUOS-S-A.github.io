import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/issueindex.css';
import '../styles/common.css';
import Header from '../components/Header';


const MainScreen = () => {
    return (
      <div>
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
  
            <div className="no-issue-msg">
              <p>No issues yet</p>
              <i className='bx bx-happy-beaming'></i>
            </div>
  
            <section className="main-table">
              <table>
                <tr>
                  <th className="circle-tag-head">Type</th>
                  <th className="circle-tag-head">Severity</th>
                  <th className="circle-tag-head">Priority</th>
                  <th className="standard-head">Subject</th>
                  <th className="standard-head">Status</th>
                  <th className="standard-head">Created</th>
                  <th className="standard-head">Assigned</th>
                </tr>
                <tr className="inner-tr-blocked">
                  <td className="row-table">
                    <div className="circle-tag"></div>
                  </td>
                  <td className="row-table">
                    <div className="circle-tag"></div>
                  </td>
                  <td className="row-table">
                    <div className="circle-tag"></div>
                  </td>
                  <td>
                    <a className="link-issue" href="#">
                      <p className="subject-id">#</p>
                      <p className="subject-text"></p>
                      <i className='bx bx-lock-alt icon-row'></i>
                      <i className='bx bx-time-five icon-row' style={{ color: 'grey' }}></i>
                    </a>
                  </td>
                  <td>
                    <p className="status"></p>
                  </td>
                  <td>
                    <p className="created-date"></p>
                  </td>
                  <td>
                    <div className="asigned-to-wrap">
                      <img className="asigned-to-img" src="" alt="" />
                      <i className="asigned-to-text">Not Assigned</i>
                      <a href="/">
                        <img className="asigned-to-img" src="" alt="" />
                      </a>
                      <p className="asigned-to-text"></p>
                    </div>
                  </td>
                </tr>
                <tr className="tr-space"></tr>
              </table>
            </section>
          </div>
        </main>
      </div>
    );
  };
  
  export default MainScreen;