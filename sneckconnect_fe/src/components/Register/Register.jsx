// src/components/Register.js

import React, { useState } from 'react';
import './Register.css'
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    // You can send registration data to your backend API
    // For simplicity, we'll just display an alert for now
    alert(`Registration successful! Username: ${username}, Email: ${email}`);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default Register;
