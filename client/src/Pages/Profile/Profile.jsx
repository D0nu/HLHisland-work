import React  from 'react'
import { useSelector } from 'react-redux';
import './Profile.css';

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user);

  const defaultAvatarUrl = 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png';


  return (
    <div className='profile p-3 max-w-lg mx-auto'>
      <h1 className='text-5xl font-bold text-center my-20'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar || defaultAvatarUrl} alt="profile"  className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
        <input 
        type="text" 
        placeholder='username' className='border p-3 rounded-lg'
        id='username'/>
        <input 
        type="text" 
        placeholder='email' 
        className='border p-3 rounded-lg'
        id='email'/>
        <input 
        type="text" 
        placeholder='password' className='border p-3 rounded-lg'
        id='password'/>
        <button className='bg-orange-700 text-black rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 font-semibold'>Update</button>
      </form>

      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
