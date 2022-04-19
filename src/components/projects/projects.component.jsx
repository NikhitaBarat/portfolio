import React from 'react'
import ProjectCard from '../projectcard/projectcard.components'
import './projects.styles.css'

function Projects() {
  return (
    <div className='projects'>
      <h1>PROJECTS</h1>
      <p className='project-relative'>Check out my projects!</p>
      <div className="project-section">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects