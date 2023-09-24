import React, { useState } from 'react';
import './signup.css'; // Create a CSS file for styling
import Layout from '@theme/Layout';
import axios from 'axios'; // Import axios for making API requests

function Signup() {
  const [selectedGender, setSelectedGender] = useState('male'); // Default to 'male', you can change it to your preference
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleInputChange = (e) => {
    // Update the form data when input fields change
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", formData); // Adjust the API endpoint URL as needed
      console.log(response.data); // Handle the response from the backend
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email Id"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group1">
            <label>Gender:</label>
            <div className='combine'>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={selectedGender === 'male'}
                onChange={handleGenderChange}
              />
              <label>
                Male
              </label>
            </div>
            <div className='combine'>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={selectedGender === 'female'}
                onChange={handleGenderChange}
              />
              <label>
                Female
              </label>
            </div>
            <div className='combine'>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={selectedGender === 'other'}
                onChange={handleGenderChange}
              />
              <label>
                Other
              </label>
            </div>
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </Layout>
  );
}

export default Signup;
