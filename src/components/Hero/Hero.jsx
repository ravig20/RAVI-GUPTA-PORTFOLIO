import React, { lazy, Suspense } from 'react'
import HomeImg from "../../images/home.jpg"
import { Link } from "react-router-dom"
import Loder from "../loading/loding"
import "./hero.css"
const Typical = lazy(()=>import('react-typical')) 
const Hero = () => {
  return (
     
    <div className="hero">
       <Suspense fallback={<Loder/>}> 
        <div className="image">
          <img
            className="img-mask"
            src={HomeImg}
            alt="HomeImage"
          />
        </div>
        <div className="hero-content">
         

          <p> Hi, I'M RAVI GUPTA</p>
          <h1> 
         
            <Typical
            steps={['MERN stack development!', 2000, ' Full-stack developer!', 2000, "Blockchain developer!", 2000, "NFTS market place", 1000]}
            loop={Infinity}
            wrapper="p"
          />
            
          </h1>

          <div className="links">
            <Link to="/contact"
              className="btn"
            >
              hireme
            </Link>
            <a href="resume.pdf"
              download={"Resume resume.pdf"}
              className="btn btn-light"
            >

              resume

            </a>
          </div>
        </div>
        </Suspense>
    </div>
      
  )
}

export default Hero;