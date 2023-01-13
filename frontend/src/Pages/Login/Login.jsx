import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <input type="text" placeholder="Enter Your Email" />
      <input type="text" placeholder="Enter Your Password" />
      <button className="login">Login</button>
      <div>or</div>
      <buttn className="signup">Signup</buttn>
    </div>
  )
}

export default Login