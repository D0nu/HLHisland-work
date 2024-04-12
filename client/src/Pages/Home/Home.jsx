import React from 'react'
import './Home.css'
import Companies from '../../Components/Companies/Companies';
import Properties from '../../Components/Properties/Propertie';
import Blogs from '../../Components/Blogs/Blogs'
import Hero from '../../Components/Hero/Hero';

export default function Home() {
  return (
    <div className="home">
      <Hero />

      <div className="background-overlay"/>
      <img className="background-image" src="./background.jpg" alt="" />

      <Companies />
      <Properties />
      <Blogs />
    </div>
  )
}
