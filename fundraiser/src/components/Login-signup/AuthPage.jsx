import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {showLogin ? (
        <Login onSignUpClick={handleToggleForm} />
      ) : (
        <SignUp onLoginClick={handleToggleForm} />
      )}
    </div>
  );
}
