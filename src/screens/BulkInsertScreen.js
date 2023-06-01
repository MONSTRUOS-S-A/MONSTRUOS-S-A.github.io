import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/newissue.css';
import '../styles/common.css';
import Header from '../components/Header';
import { BulkInsertForm } from '../components/BulkInsertForm';

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
                    <BulkInsertForm />
                </section>
            </main>
        </div>
    );
};

export default BulkInsert;
