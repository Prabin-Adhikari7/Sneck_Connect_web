// src/components/AuthSwitcher.js

import React, { useState } from 'react';
import './AuthSwitcher.css'
function AuthSwitcher({ onSwitch }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    onSwitch(!isLogin); // Pass the current mode (login or register) to the parent component
  };

  return (
    <div>
      <button onClick={handleSwitch}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default AuthSwitcher;
