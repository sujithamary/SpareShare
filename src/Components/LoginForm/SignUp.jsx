import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const emailValidator = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const passwordValidator = (password) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
    return passwordRegex.test(password);
};

const SignUp = () => {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        fName: '',
        lName: '',
        password: '',
        confirmPassword: '',
    });
    
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        
        if (!emailValidator(formData.email)) {
            return setEmailError('Please enter a valid email address.');
        }
        
        if (!passwordValidator(formData.password)) {
            return setPasswordError('Please enter a valid password');
        }
        
        if (formData.password !== formData.confirmPassword) {
            return setConfirmPasswordError('Passwords do not match.');
        }
        Navigate('/') 
    };

    return (
        <div className='body'>
            <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <div className="input-box">
                    <input type="text" placeholder="Firstname" name="fName" required onChange={handleChange} />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Lastname" name="lName" required onChange={handleChange} />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" name="email" required onChange={handleChange} />
                    <MdEmail className="icon" />
                    {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" name="password" required onChange={handleChange} />
                    <FaLock className="icon" />
                    {passwordError && <p className="error-message">{passwordError}</p>}
                </div>
                <div className="input-box">
                    <input
                        type="password" placeholder="Confirm Password" name="confirmPassword" required onChange={handleChange} />
                    <FaLock className="icon" />
                    {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
                </div>

                <input type = "submit" className='button' value= 'SignUp'></input>

                <div className="register-link">
                    <p>
                        Already have an account? <Link to="/LoginForm">Login</Link>
                    </p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default SignUp;
