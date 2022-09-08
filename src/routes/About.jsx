import React from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import HeroSection from '../components/Hero/HeroSection'
import Navbar from '../components/Navbar/Navbar'

const About = () => {
  return (
    <div>
       <Navbar/>
       <HeroSection content={"- About Me -"} message={"I'm a familiar with coding in Fullstack or Blockchain development"} about={true}/>
       <AboutMe/>

    </div>
  )
}

export default About