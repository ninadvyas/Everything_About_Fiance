import React from 'react';
import './login.css'; // Create a CSS file for styling
import Layout from '@theme/Layout';

function LoginForm() {
  return (
    <Layout>
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
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

export default LoginForm;
