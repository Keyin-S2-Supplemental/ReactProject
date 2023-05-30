// Login.js

import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Authenticate user here
    console.log('handleSubmit')
    history('/');
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;
