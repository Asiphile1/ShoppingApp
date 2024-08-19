import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';
import './RegistrationPage';
// import '/src/assets/cover2.webp';  no need to import it here

const LoginPage = () => {
  const { login } = useAuth();  
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/users');
        const users = await response.json();
//   console.log(response, users)

        const user = users.find(
          (user) => user.username === username && user.password === password
        );
  
        if (user) {
          localStorage.setItem('user', JSON.stringify({ username }));
          login();
          navigate('/home');
        } else {
          setError('Invalid username or password');
        }
      } catch (error) {
        setError('Failed to login. Please try again.');
      }
    
     
    //  if (username === 'user' && password === 'password') {
       
    //     localStorage.setItem('user', JSON.stringify({ username }));
  
        
    //     navigate('/home');
    //   } else {
    //     alert('Invalid username or password');
    //   }
    //   navigate('/home')
    };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
};

export default LoginPage;






// import React from 'react';

// const LoginPage = () => {
//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
