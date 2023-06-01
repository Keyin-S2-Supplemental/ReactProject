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
     history('/feed');
   }

   <p>
  Already have an account?{' '}
  <Link to="/login">Log in</Link>
</p>



  return (
    <>
    <h1>The Book Worm</h1>
    <div className='signup-container'>
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className='name'>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      </div>
      <div className='email'>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      </div>
      <div className='password-signup'>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      </div>
      <div className='button-signup'>
      <button type="submit">Sign up</button>
      </div>
      <div className='already-account'>
      <p>
        Already have an account?{' '}
        <Link to="/login">Log in</Link>
      </p>
      </div>
    </form>
</div>
</>
  );
}

export default Signup;
