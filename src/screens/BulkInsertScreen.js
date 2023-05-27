import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/newissue.css';
import '../styles/common.css';
import Header from '../components/Header';

const BulkInsert = () => {
  return (
    <div>
      <Header />
        <main className="new-issue-main">
            <section className="new-issue-section">
                <header className="new-issue-header">
                    <h2>New bulk insert</h2> 
                    <Link className="close-create-issue-btn" to="/main">
                        <i className='bx bx-x'></i>
                    </Link>
                </header>
                <form className="new-issue-form-wrap" method="post" action="{% url 'create_bulk' %}">
                    <div className="top-section">
                        <div className="left-section">
                            <p>Type below the name of the issues</p>
                            <textarea  className = "custom-input" name="description" id="" cols="30" rows="10" placeholder="One item per line..."></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn-create-issue">CREATE</button>
                </form>
            </section>
        </main>
    </div>
  );
};

export default BulkInsert;
