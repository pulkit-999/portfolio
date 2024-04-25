import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.png'
const About = () => {
  return (
    <div id="about" className='about'>
    <div className="about-title">
      <h1>About me</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="about-sections">
      <div className="about-left">
        <img src={profile} alt="" width="300" 
     height="350" />
      </div>
      <div className="about-right">
        <div className="about-para">
          <p>
              HELLO 
          </p>
          <p>
              I AM A FRONTEND DEVELOPER LOOKING FOR JOB OPPORTUNITIES 
          </p>
        </div>
        <div className="about-skills">
        <div className="about-skill">
          <p>HTML and CSS</p><hr style= {{width:"50%"}}/>
        </div>
        <div className="about-skill">
          <p>JAVASCRIPT</p><hr style= {{width:"70%"}}/>
        </div>
        <div className="about-skill">
          <p>REACTJS</p><hr style= {{width:"60%"}}/>
        </div>
        <div className="about-skill">
          <p>NODEJS</p><hr style= {{width:"50%"}}/>
        </div>

        </div>
      </div>
    </div>
    <div className="about-achievements">
    <div className="about-achievement">
      <h1>FRESHER</h1>
      <p>Experience</p>
    </div>
    <hr/>
    <div className="about-achievement">
      <h1>15+</h1>
      <p>Projects completed</p>
    </div>

    </div>
    </div>

  )
}

export default About