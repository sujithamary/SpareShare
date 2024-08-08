import React, { useState } from 'react';
import './LoginForm.css';
import { FaLock, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { loginHandler } from './axios/loginHandler';

const LoginForm =  ({ onLogin }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await loginHandler(form.email, form.password);
    if (success) {
      navigate('/');
    } else {
      alert('Invalid credentials, please try again.');
    }
  };

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
};

  return (
    <div className='body'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Email" name="email" value={form.email} required onChange={handleChange} />
            <MdEmail className="l-icon" />
          </div>
          <div className="input-box">
            <input type="password" name = "password" placeholder="Password" required value={form.password} onChange={handleChange} />
            <FaLock className='l-icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <hr className="horizontal-line" />
          <div className="social-login">
            <p>or login using</p>
            <FcGoogle className='social-icon1' />
            <FaFacebook className='social-icon2' />
          </div>
          <input type="submit" className='button' value='Login' />
          <div className="register-link">
            <p>Don't have an account? <Link to="/SignUp">Signup</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
