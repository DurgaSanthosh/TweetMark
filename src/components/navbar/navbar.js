import React from 'react';
import './navbar.css';
import NavLogo from '../../assets/logoblackbg.png';

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
        <div className='navlog'>
          <img src={NavLogo} className='navlogo'></img>
          <div className="nav_title">TweetMark</div>
        </div>
        <li></li>
        <li></li>
        <li></li>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
    </ul>
   </div>
  );
}

export default Navbar;