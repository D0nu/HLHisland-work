import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Searchbar() {
  return (
    <form className='bg-slate-100 p-3 rounded-lg flex items-center max-w-max'>
      <input 
      type="text" 
      placeholder="Search..." 
      className='bg-transparent focus:outline-none'/>
      <FaSearch className='text-yellow-600'/>
    </form>
  )
}
