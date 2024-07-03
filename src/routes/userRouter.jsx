import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import auth from './protectedRoute';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/signInPage';
import SavedPasswordsPage from '../pages/SavedPasswordsPage';

function UserRouter() {
  const token = localStorage.getItem('token')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<auth.ProtectedRouteWrapper><SignUpPage /></auth.ProtectedRouteWrapper>} />
        <Route path="/signin" element={<auth.ProtectedRouteWrapper><SignInPage /></auth.ProtectedRouteWrapper>} />
        <Route path='/savedPasswords' element={token?(<SavedPasswordsPage/>):(<Navigate to={'/'} />)} />
      </Routes>
    </Router>
  );
}

export default UserRouter;
