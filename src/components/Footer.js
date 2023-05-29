import React from 'react'
import '../styles/Footer.css';
import {FaInstagram,FaFacebook,FaLinkedin,FaTwitter} from 'react-icons/fa'
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
        <FaLinkedin />
      </div>
      <p>&copy; 2023 IndianFooood.com</p>
    </div>
  );
}

export default Footer