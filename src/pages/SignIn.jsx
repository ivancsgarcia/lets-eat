import React from 'react'
import './signin.css'

function SignIn() {
  return (
    <div className='signin'>
        <img src="" alt="bg-pic" />
        <h1>Sign In To Your Account</h1>
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="submit" className='submit'/>
        <a href="#" className='forgot-password'>Forgot Password?</a>
        <p className='sign-up-p'>Don't have an account? <a href="#" className='sign-up'>Sign Up</a></p>
    </div>
  )
}

export default SignIn