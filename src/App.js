import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import WelcomeScreen from './screens/WelcomeScreen';
import MainScreen from './screens/MainScreen';
import NewIssue from './screens/NewIssueScreen';
import BulkInsert from './screens/BulkInsertScreen';
import { AuthProvider } from './context/AuthContext';
import IssueScreen from './screens/IssueScreen';
import UserPage from './screens/UserPage';
import EditIssue from './screens/EditIssue';
import EditProfile from './screens/EditProfile';
import UserTimelines from './screens/UserTimelines';
import Issue from './screens/Issue';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<WelcomeScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/new_issue" element={<NewIssue />} />
          <Route path="/bulk_insert" element={<BulkInsert />} />
          <Route path="/main/issue/:id" element={<IssueScreen />} />          <Route path = "/user_page/:id" element = {<UserPage />} />
          <Route path = "/edit_issue" element = {<EditIssue />} />
          <Route path = "/edit_profile/:id" element = {<EditProfile/>} />
          <Route path = "/user_detail/:id" element = {<UserTimelines/>} />
          <Route path = "/issue" element = {<Issue/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
