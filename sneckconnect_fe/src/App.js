import React, { useState } from 'react';
import './App.css';
import Login from './components/Logincomp/login'
import Register from './components/Register/Register';
import AuthSwitcher from './components/LogRegswitch/Authswitcher';

function App() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleAuthModeSwitch = (newMode) => {
    setIsLoginMode(newMode);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoginMode ? <Login /> : <Register />}
        <AuthSwitcher onSwitch={handleAuthModeSwitch} />
      </header>
    </div>
  );
}

export default App;
