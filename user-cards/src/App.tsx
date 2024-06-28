import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { clearToken } from './store/authSlice';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import Login from './pages/Login';

const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearToken());
  };

  return (
    <Router>
      <div>
        {token && (
          <nav>
            <button onClick={handleLogout}>Logout</button>
          </nav>
        )}
        <Routes>
          <Route path="/login" element={<Login />} />
          {token ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/users/:id" element={<UserPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
