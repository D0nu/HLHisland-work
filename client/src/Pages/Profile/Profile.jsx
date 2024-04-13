import React, { useState, useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Profile.css';
import { useRef } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import {  app } from '../../utils/firebase.js';
import { 
  updateUserStart, 
  updateUserFailure, 
  updateUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signOutUserStart, } from '../../redux/User/userSlice.js';


export default function Profile() {
  const {currentUser,loading, error } = useSelector((state) => state.user);

  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [ formData, setFormData ] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  
  
  
  const defaultAvatarUrl = 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png';

  //firebase storage
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePerc(Math.round(progress));
    }, 
    (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData({...formData, avatar: downloadURL});
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      } );

      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  };


  return (
    <div className='profile p-3 max-w-lg mx-auto'>
      <h1 className='text-5xl font-bold text-center my-14'>Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        
        <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept='image/*'/>

        <img onClick={() => fileRef.current.click()} src={formData.avatar || currentUser.avatar || defaultAvatarUrl} alt="profile"  className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>

        <p className='text-sm self-center'>
        {fileUploadError ? (
            <span className='text-red-700'>
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className='text-black'>{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className='text-green-700'>Image successfully uploaded!</span>
          ) : (
            ''
          )}
        </p>
        <input 
        type="text" 
        placeholder='username'
        defaultValue={currentUser.username}
        className='border p-3 rounded-lg'
        id='username'
        onChange={handleChange}/>
        <input 
        type="email" 
        placeholder='email'
        defaultValue={currentUser.email} 
        className='border p-3 rounded-lg'
        id='email'
        onChange={handleChange}/>
        <input 
        type="password" 
        placeholder='password' className='border p-3 rounded-lg'
        id='password'
        onChange={handleChange}/>
        <button disabled={loading} className='bg-orange-700 text-black rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 font-semibold'>
          {loading ? 'Loading...' : 'Update'}
          </button>
      </form>

      <div className='flex justify-between mt-5'>
        <span onClick={handleDeleteUser} className='text-red-700 cursor-pointer'>Delete Account</span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>

      <p className='text-red-700 mt-5'> {error ? error : ''}
      </p>
      <p className='text-green-700 mt-5'> {updateSuccess ? 'User updated successfully' : ''}
      </p>
    </div>
  )
}
