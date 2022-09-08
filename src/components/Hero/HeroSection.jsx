import "./heroSection.css"

import React from 'react'

const HeroSection = ({content,message,about=false}) => {
  return (
    
    <div className={about ? " hero-container hero-container-about":"hero-container"} >
        <div className="hero-info">
          <h1>
            {content}
         </h1>
         <p>
            {message}
         </p>
        </div>
    </div>
  )
}

export default HeroSection