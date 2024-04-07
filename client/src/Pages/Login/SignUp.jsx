import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="signup p-3 max-w-lg mx-auto">
      <h1 className="s-title">Sign Up</h1>
      <form className='s-details gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username'/>
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email'/>
        <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password'/>
        <button className='bg-yellow-600 text-black p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 font-semibold'>Sign up</button>
      </form>

      <div className="flex gap-2 mt-5">
        <p className='text-black'>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-orange-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
