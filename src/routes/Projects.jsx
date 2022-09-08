import React from 'react'
import HeroSection from '../components/Hero/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import ProjectCard from '../components/ProjectCard/ProjectCard'

const Projects = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection content={"- PROJECTS -"} message={" Some of my most latest projects for blockchain development and  Fullstack development"}/>
    <ProjectCard/>
   
   
    </div>
  )
}

export default Projects