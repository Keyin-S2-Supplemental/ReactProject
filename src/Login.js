// Login.js

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Style.css'

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
    <div className='login-container'>
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log in</button>
      <p>
  Don't have an account?{' '}
  <Link to="/signup">Sign up</Link>
</p>
    </form>
</div>       
  );
}
export default Login;
