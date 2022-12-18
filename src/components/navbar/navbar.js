import React from 'react';
import './navbar.css';
import NavLogo from '../../assets/logoblackbg.png';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';


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
        
        <Link to='/' ><li> Home</li></Link>
        <Link to='/about'><li> About</li></Link>
        <Link to='/contactus'><li> Contact Us</li> </Link>
    </ul>
   </div>
  );
}

export default Navbar;