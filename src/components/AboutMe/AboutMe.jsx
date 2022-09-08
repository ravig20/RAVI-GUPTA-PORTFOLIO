import React from 'react'
import "./aboutme.css"
import {skillsData} from "../../data/MyprojectDetels"

const AboutMe = () => {
    return (
        <div className="Allabout">
            <h1> Let's Checkout</h1>
            <div className='AboutMe'>
                <div className='AboutMe-container'>
                    <div className='heading-info'>

                        <h1>Professional Details</h1>
                        <h3>Hi I'm RAVI GUPTA from Sagar,India</h3>
                    </div>
                    <p>
                        Hi, I'm a Full-Stack, MERN, Block-Chain Developer Certified by Edureka & Eduonix Learning solution and Also participate in Open Source contribution who is highly passionate about building or creating , creative applications, websites, Smart contract using solidity, increase performance of applications using a concepts of react, creating a REST-Full API, And currently i'm freelancer, loves to build and design responsive applications which make peoples life easy and right now i am looking for such an opportunity where i can start my career and grow  to the next level ..
                    </p>
                </div>
                <div className='AboutMe-skills'>
                    <h1 >Personal Details</h1>
                    <div className='my-info'>
                        <p>
                            <strong> Name :</strong>&nbsp; Ravi gupta
                        </p>
                        <p>
                            <strong> Email :</strong> &nbsp; ravibaba2022@gmail.com
                        </p>
                        <p>
                            <strong>phone :</strong> &nbsp; +917067765383
                        </p>
                        <p>
                            <strong> address :</strong> &nbsp; Sagar india
                        </p>
                        <p>
                            <strong> Date of birth :</strong>&nbsp; 22-07-2002
                        </p>
                        <h1 > Education</h1>
                        <p><strong>Schooling :</strong>&nbsp; Svm Sharda vihar Bhopal</p>
                        <ul>
                       
                            <li>
                                <strong>CLASS 10th CBSE (English) : </strong> &nbsp;7.4 CGPA
                            </li>
                            <li>
                                <strong>CLASS 12th CBSE (English)</strong>&nbsp; 7.6 CGPA
                            </li>

                        </ul>
                        <p><strong>Collage :</strong>&nbsp; Chameli devi group onf institution Indore</p>
                        <ul>
                            <li>
                                <strong> Degree : </strong> &nbsp; Bachelor of computer Science
                            </li>
                        </ul>
                        <p><strong>Sport :</strong></p>
                        <ul>
                            <li>
                                <strong> National Yoga player </strong>
                            </li>
                            <li>
                                <strong> District level in Chess </strong>
                            </li>
                            <li>
                                <strong> Badminton </strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="skills-container">
            
                    <h1>- IT  SKILLS -</h1>
                
                <div className='skills-key'>
                {skillsData.map((skill, index)=>(

                    <h1 className='btn' key={index}>{ skill }</h1>
                ))}
                
                </div>
            </div>
        </div>
    )
}

export default AboutMe