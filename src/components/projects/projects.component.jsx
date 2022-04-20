import React from 'react'
import ProjectCard from '../projectcard/projectcard.components'
import './projects.styles.css'
import Data from './projects.json'
import {Link} from 'react-router-dom'

function Projects() {
  return (
    <div className='projects'>
      <h1>PROJECTS</h1>
      <p className='project-relative'>Check out my projects!</p>
      <div className="project-section">
      {Data.map((project) => (
        <Link to={`/projects/${project.route}`}>
            <ProjectCard
              project_name={project.project_name}
              details={project.details}
              url={project.url}
              thumbnail={project.thumbnail}
            />
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Projects