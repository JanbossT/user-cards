import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setToken } from '../store/aut';
import { useNavigate } from 'react-router-dom';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      dispatch(setToken(response.data.token));
      navigate('/');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
      <div>
        <p>Для тестирования вы можете использовать:</p>
        <p>Email: eve.holt@reqres.in</p>
        <p>Password: cityslicka</p>
      </div>
    </div>
  );
};

export default AuthForm;