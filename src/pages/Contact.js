import React from 'react'
import Pizzaleft from '../assets/fooda.jpeg'
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide"
      
      style={{backgroundImage:`url(${Pizzaleft})`}}>
          <div className="rightSide">
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
              <label htmlFor="name">Full Name</label>
              <input type="text" name='name' placeholder='Enter full name...' />
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='Enter email...' name='email' />
              <label htmlFor="message">Message</label>
              <textarea name="message"  rows="6" placeholder='Enter message...' required></textarea>
              <button type='submit'>Send Message</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact