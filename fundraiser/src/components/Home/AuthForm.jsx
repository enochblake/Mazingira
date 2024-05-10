
import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

function AuthForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'donor',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let endpoint = '';
      // Assuming mode is determined by onSuccess function being provided or not
      if (onSuccess) {
        endpoint = '/register';
      } else {
        endpoint = '/login';
      }
      const response = await axios.post(endpoint, formData);
      console.log(`User ${onSuccess ? 'registration' : 'login'} successful:`, response.data);
      setLoading(false);
      if (onSuccess) {
        onSuccess(); // Call the onSuccess function passed from parent component (like Login or SignUp) after successful authentication
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.error('Server Error:', error.response.data);
        setError(error.response.data.message || 'Server Error: Unable to complete the request.');
      } else if (error.request) {
        console.error('Network Error:', error.request);
        setError('Network Error: Unable to connect to the server.');
      } else {
        console.error('Request Error:', error.message);
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <FormControl>
          <FormLabel>Email: </FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password: </FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormControl>
        {/* Assuming role selection is not part of AuthForm */}
        <Button type="submit" isLoading={loading} loadingText="Submitting">
          {onSuccess ? 'Sign Up' : 'Login'}
        </Button>
      </Stack>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default AuthForm;
