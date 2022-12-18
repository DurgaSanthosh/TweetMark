import React from 'react';
import './contactus.css';
function Contactus() {
  return (
    <div className='contact'>
    <div ><h1>Contact Us</h1></div>
    <div className='contact-us'>
        <div className='contact-inputs'>
        <label>
            Your Name
            <input type="text"/>
        </label>
        <label>
            Mobile Number
            <input type="text"/>
        </label>
        <label>
            Your Email
            <input type="text"/>
        </label>
        <label>
            Your Message
            <input type="text" className='message'/>
        </label>
        <center><button className='send-button'>Send</button></center>
    </div>
    </div>
    </div>
  )
}

export default Contactus