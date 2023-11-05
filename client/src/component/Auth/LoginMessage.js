import React from 'react';

const LoginMessage = ({ message, onClose }) => {
  return (
    <div className="login-message">
      <div className="message-content">
        <p>{message}</p>
        <button onClick={onClose}>Okay</button>
      </div>
    </div>
  );
};

export default LoginMessage;
