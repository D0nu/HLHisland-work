import { Component } from 'react';
import Dropdown from './Dropdown';
import './Navbar.css';
import { Link } from 'react-router-dom';

const linkStyle = {
  margin:"1rem"
}

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

render() {
  return ( 
    <>
     <nav>
      <h1 className='font-bold'>
        <span className='text-slate-950'>Houston</span>
        <span className='text-slate-700'>Island</span>
      </h1>
      <Link to="/"><img src="./logo1.svg" alt="" className="N-logo"/></Link>

      <div>
        <ul id="navbar" className={this.state.clicked
         ? "#navbar active"
         : "#navbar"}>
          <li><Link to="/about" style={linkStyle}>About us</Link></li>
          <Dropdown />
          <li><Link to="/blogs" style={linkStyle}>Blogs</Link></li>
          <li><Link to="/contact-us" style={linkStyle}>Contact us</Link></li>
          <li><Link to="/qualitypolicy" style={linkStyle}>Quality Policy</Link></li>
          <button className="button"><li><Link to="/sign-up">Sign up</Link></li></button>
        </ul>
      </div>

      <div className="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav> 
    </>
   );
  }
}

export default Navbar;