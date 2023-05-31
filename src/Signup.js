// Signup.js

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Style.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

   function handleSubmit(e) {
     e.preventDefault();
     // Create new user account here
     history('/');
   }

   <p>
  Already have an account?{' '}
  <Link to="/login">Log in</Link>
</p>


  return (
    <div className='signup-container'>
    <form className="signup-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Sign up</button>
      <p>
        Already have an account?{' '}
        <Link to="/login">Log in</Link>
      </p>
    </form>
</div>
  );
}

export default Signup;
