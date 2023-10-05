import React, { useState } from 'react';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    if (username === 'admin' && password === 'admin') {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container"> {/* Add a class for styling */}
    <h2>Login</h2>
    <form className="login-form"> {/* Add a class for styling */}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="button" onClick={handleLogin}>Login</button>
    </form>
  </div>
);
}

export default Login;