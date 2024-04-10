import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';

const linkStyle = {
  margin: "1rem"
}

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const { currentUser } = this.props;
    const { clicked } = this.state;

    const defaultAvatarUrl = 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png';

    return (
      <>
        <nav>
          <h1 className='font-bold'>
            <span className='text-slate-950'>Houston</span>
            <span className='text-slate-700'>Island</span>
          </h1>
          <Link to="/"><img src="./logo1.svg" alt="" className="N-logo" /></Link>

          <div>
            <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
              <li><Link to="/about-us" style={linkStyle}>About us</Link></li>
              <Dropdown />
              <li><Link to="/blogs" style={linkStyle}>Blogs</Link></li>
              <li><Link to="/contact-us" style={linkStyle}>Contact us</Link></li>
              <li><Link to="/qualitypolicy" style={linkStyle}>Quality Policy</Link></li>
              <Link to='/profile'>
                {currentUser ? (
                  <img className='rounded-full h-10 w-10 object-cover' src={currentUser.avatar || defaultAvatarUrl} alt='profile' />
                ) : (
                  <li><button className="button">Sign In</button></li>
                )}
              </Link>
            </ul>
          </div>

          <div className="mobile" onClick={this.handleClick}>
            <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </nav>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);
