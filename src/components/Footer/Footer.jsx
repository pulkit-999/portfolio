import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img id='fk' src={logo} alt="" />
                    <p>I am a frontend developer based in Lucknow,India</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">Pulkit Agrawal.All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
