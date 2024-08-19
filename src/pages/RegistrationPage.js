import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';


const RegistrationPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!username || !password) {
        setError('Please fill in all fields.');
        return;
      }
  
      try {
        const response = await fetch('http://localhost:5000/users', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (!response.ok) {
          throw new Error('Registration failed. Please try again.');
        }
  
        navigate('/login');
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <div className="registration-page">
        <div className="registration-form-container">
          <h2>Register</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Register</button>
          </form>
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
    );
  };
  
  export default RegistrationPage;