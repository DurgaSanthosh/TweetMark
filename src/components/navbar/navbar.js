import React from 'react';
import './navbar.css';
import NavLogo from '../../assets/logoblackbg.png';

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
        <div className='navlog'><li ><img src={NavLogo} className='navlogo'></img></li>
        <h3>TweetMark</h3>
        </div>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
    </ul>
   </div>
  );
}

export default Navbar;