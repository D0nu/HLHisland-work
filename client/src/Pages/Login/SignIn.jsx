import { useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../../redux/User/userSlice';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="signup p-3 max-w-lg mx-auto">
      <h1 className="s-title">Sign In</h1>
      <form className='s-details gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password'
        onChange={handleChange}/>
        <button disabled={loading} className='bg-yellow-600 text-black p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 font-semibold'>{loading ? 'loading..' : 'Sign In'}</button>
      </form>

      <div className="flex gap-2 mt-5">
        <p className='text-black'>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-orange-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>Invalid Credentials</p>}
    </div>
  );
}