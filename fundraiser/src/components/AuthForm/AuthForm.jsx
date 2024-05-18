
import React, { useState } from 'react';
// import './authForm.css'; // Make sure to import your CSS file

function SlideNavbar() {
    const [signupFormData, setSignupFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const handleSignupFormChange = (e) => {
        const { name, value } = e.target;
        setSignupFormData({ ...signupFormData, [name]: value });
    };

    const handleLoginFormChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value });
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Simulating signup logic by logging form data
        console.log("Signup Form Data:", signupFormData);

        // Optional: You can also clear the form fields after successful signup
        setSignupFormData({
            username: '',
            email: '',
            password: ''
        });

        // Alert message for successful signup
        alert('Signup Successful!');
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Simulating login logic by logging form data
        console.log("Login Form Data:", loginFormData);

        // Optional: You can also clear the form fields after successful login
        setLoginFormData({
            email: '',
            password: ''
        });

        // Alert message for successful login
        alert('Login Successful!');
    };

    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form onSubmit={handleSignupSubmit}>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="username" placeholder="User name" required value={signupFormData.username} onChange={handleSignupFormChange} />
                    <input type="email" name="email" placeholder="Email" required value={signupFormData.email} onChange={handleSignupFormChange} />
                    <input type="password" name="password" placeholder="Password" required value={signupFormData.password} onChange={handleSignupFormChange} />
                    <button type="submit">Sign up</button>
                </form>
            </div>

            <div className="login">
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" required value={loginFormData.email} onChange={handleLoginFormChange} />
                    <input type="password" name="password" placeholder="Password" required value={loginFormData.password} onChange={handleLoginFormChange} />
                    <button  id="login.btn" type ="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default SlideNavbar;

