import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

const linkStyle = {
  color: "golden-rod"
}


function Footer ()  {
    return (
      <footer className="footer">
        <div className="paddings footerHead">
          <div className="social-icons">
            <Link to="https://www.facebook.com"><FaFacebook /></Link>
            <Link to="https://www.twitter.com"><FaTwitter /></Link>
            <Link to="https://www.instagram.com" ><FaInstagram /></Link>
            <Link to=""><FaWhatsapp/></Link>
          </div>
  
          <div className="flexColStart footer-information">
              
            <div className="flexColStart company">
              <span className="site-name">HOUSTON LUXURY HOMES</span>
              <span className="site-summary">Elevating lifestyles through<br/> personalized property solutions, our <br/> real estate company embodies<br/> sophistication, innovation, and unwavering <br/>commitment to client satisfaction.</span>
              </div>
              
              <img src="./logo1.svg" alt="" /> 
        
              <div className="flexColStart quick-links">
                <h1>Quick Link</h1>
                <Link to="/about">About us</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact-us">Contact us</Link>
              </div>
  
              <div className="flexColStart location">
                <h1>Location</h1>
                <Link to="/lagos">Lagos</Link>
                <Link to="/houston">Houston</Link>
                <Link to="/abu-dhabi">ABU DHABI</Link>
              </div>
  
              <div className="contact">
                <h1>Contact</h1>
                  <div className="contact-value">
                    <FaPhoneAlt/> <span>2349017322713</span>
                  </div>
              </div>
          </div>
  
          <section className="g-wrapper">
          <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
            <span className="primaryText">Get Started with Houston luxury homes</span>
            <span className="secondaryText">Subscribe and find super price quotes from us <br/>
            Find your residence soon</span>
            <button className="button1">
              <Link to="mailto:ikechukwujoseph146@gmail.com">GET STARTED</Link>
            </button>
            </div>
          </div>
        </section>
      </div>
  
        
        <div className="footerbottom">
          <p className="rights-reserved">&copy; 2024 All Rights Reserved</p>
  
              
              
          <div className="footer-links">
            <Link to="/lagos">Lagos</Link>
            <Link to="/houston">Houston</Link>
            <Link to="/abu-dhabi">Abu Dhabi</Link>
          </div>  
        </div>
      </footer>
    );
  };
  
  export default Footer;