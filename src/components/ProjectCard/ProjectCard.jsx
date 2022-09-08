import React from 'react'
import CardData from '../../data/MyprojectDetels'
import "./Projectcard.css"
const ProjectCard = () => {
    return (
        <div className='project-card'>
            <h1 className='project-name'>  Project Here</h1>
            <div className='project-container'>

                {CardData?.map((data,index) => (

                    <ImageCard 
                    key={index}
                    imgSrc={data.imgSrc}
                    imgAlt={data.imgAlt}
                    projectTitle={data.projectTitle} 
                    projectDescription={data.projectDescription}
                    view={data.view}
                    sourceCode={data.sourceCode}                 
                    
                    />

                ))}
            </div>
        </div>
    )
}

export default ProjectCard

const ImageCard = ({ imgSrc, imgAlt, projectTitle, projectDescription, view, sourceCode }) => {
    return (

        <div className='project-image'>
            <img
                src={imgSrc}  //PetShopApp
                alt={imgAlt}
            />
            <h2 className='project-title'>
                {projectTitle}
            </h2>
            <div className='project-description'>
                <p>
                    {projectDescription}
                </p>
                <div className='project-button'>
                    <a href={sourceCode}
                        className="btn btn2"
                    >
                        Source Code
                    </a>
                    <a href={view}
                        className="btn"
                    >
                        V i e w   
                    </a>
                </div>
            </div>
        </div>
    )
}

