import React, { useState } from 'react';
import axios from 'axios';

// Set base URL for Axios
axios.defaults.baseURL = 'http://localhost:5000/api';

function AuthForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'donor', // Default role is 'donor'
  });
  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let endpoint = '';
      if (mode === 'login') {
        endpoint = '/login';
      } else {
        endpoint = '/register';
      }
      const response = await axios.post(endpoint, formData);
      console.log(`User ${mode} successful:`, response.data);
      // Optionally, you can store the token in localStorage or sessionStorage for authentication
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server Error:', error.response.data);
        setError(error.response.data.message || 'Server Error: Unable to complete the request.');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Network Error:', error.request);
        setError('Network Error: Unable to connect to the server.');
      } else {
        // Something else happened in setting up the request that triggered an error
        console.error('Request Error:', error.message);
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div>
      <h2>{mode === 'login' ? 'User Login' : 'User Registration'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {mode === 'register' && (
          <div>
            <label htmlFor="role">Role: </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="donor">Donor</option>
              <option value="organization">Organization</option>
              <option value="administrator">Administrator</option>
            </select>
          </div>
        )}
        <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
        <button type="button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
          {mode === 'login' ? 'Switch to Registration' : 'Switch to Login'}
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
}

export default AuthForm;
