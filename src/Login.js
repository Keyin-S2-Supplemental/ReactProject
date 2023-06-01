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
    history('/feed');
    
  }

  return (
    <div className='login-container'>
    <form className="login-form" onSubmit={handleSubmit}>
      <div className='username'>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      </div>
      <div className='password'>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      </div>
      <div className='button'>
      <button type="submit">Log in</button>
      </div>
      <div className='no-account'>
      <p>
  Don't have an account?{' '}
  <Link to="/signup">Sign up</Link>
</p>
</div>
    </form>
</div>       
  );
}
export default Login;
