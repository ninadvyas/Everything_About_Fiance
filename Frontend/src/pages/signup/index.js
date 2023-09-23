import React from 'react';
import './signup.css'; // Create a CSS file for styling
import Layout from '@theme/Layout';

function Signup() {
  return (
    <Layout>
    <div className="login-container">
      <form className="login-form">
        <h2>Signup</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div className="input-group">
          <label htmlFor="username">Email:</label>
          <input type="email" id="email" placeholder="Enter your Email Id" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password"  required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </Layout>
  );
}

export default Signup;
