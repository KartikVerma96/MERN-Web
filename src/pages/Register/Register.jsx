import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className="register-container">  
      <div className="register-box">
        <div className="register-heading">
          <p>Register</p>
        </div>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Enter Your Name' />
        </div>
        <div className="email">
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" placeholder='Enter Your E-mail' />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter Your Password" />
        </div>
        <div className="dob">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" placeholder='Enter Date of Birth'/>
        </div>
        <div className="city">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" placeholder='Enter Your City'/>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register