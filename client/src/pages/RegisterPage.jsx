import React, { useState } from 'react';
import '../styles/RegisterPage.css';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !email.trim() || !password.trim()) {
      alert('Please fill in all fields');
    } else {
      console.log('Registering with:', { username, email, password });
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <h1 className='big-title'>Register</h1>
      <div className='auth-form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            placeholder='your email@gmail.com'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            placeholder='*********'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            placeholder='your username'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button className='link-btn' type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
