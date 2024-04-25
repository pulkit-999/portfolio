import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={profile} alt=""   width="200" 
     height="180"/>
        <h1><span>I'm Pulkit Agrawal,</span>frontend developer based in India</h1>
        <p>
            I am a frontend developer looking for job opportunities.
        </p>
        <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
        </div>
        </div>
  )
}

export default Hero