import "./Footer.css";
import React from 'react'
import { BsGithub,BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
  return (
    <div
    style={{
        width: '100%',
        height: '90px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        color: 'white',
        padding:"0.2rem 0",
        
        
    }}
    >
      
      <div className="icons">
        <a href="https://twitter.com/ravi_g20"   >
          <BsTwitter size={40} color="skyblue"/>
        </a>
     
      <a href="https://github.com/ravig20/"   >
      <BsGithub  size={40}/>
      </a>
      
      <a href="https://www.linkedin.com/in/ravi-gupta-6b15a9185"   >
      <AiFillLinkedin  size={40}  color="skyblue"/>
      </a>
      
    </div>
      <div className="footer">
        <h3>© 2020 Copyright: All copyright received</h3>
      </div>
    
    </div>
  )
}

export default Footer