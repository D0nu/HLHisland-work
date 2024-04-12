import React from 'react';
import "./Hero.css"
import { Link } from 'react-router-dom'




function Hero  ()  {
  

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">


       <div className="flexColStart hero">
          <div className="hero-title">
            <h1>Discover Most Suitable<br/>Properties </h1>
          
          </div>

          <div className="flexColStart hero-descr">
            <span>Find a variety of properties <br/>that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
        
          <div className="flexCenter h-button">
           {/* <HiLocationMarker color="gold" size={25}/>
            <input  type="text" placeholder="Town, City, Zip" />*/ }  
            <Link to="/lagos">
              <button className="button">View More</button>
            </Link>          
            </div>         
        </div>        
      
        
        </div>
    </section>
  )
}

export default Hero;