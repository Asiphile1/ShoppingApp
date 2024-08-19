import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
// import '/src/assets/cover2.webp';  no need to import it here

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
     
     if (username === 'user' && password === 'password') {
       
        localStorage.setItem('user', JSON.stringify({ username }));
  
        
        navigate('/home');
      } else {
        alert('Invalid username or password');
      }
    };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Login</h2>
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
