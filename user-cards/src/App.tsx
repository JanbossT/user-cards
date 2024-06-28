
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import Login from './pages/Login';

const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {token ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;

