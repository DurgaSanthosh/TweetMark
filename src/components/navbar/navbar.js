import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
        <li ><h3 className='logo'>TweetMark</h3></li>
        <li>About</li>
        <li>Contact us</li>
    </ul>
   </div>
  );
}

export default Navbar;