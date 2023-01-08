import { useState } from 'react'

const Project = ({project}) => {

  const handleMouseEnter = (event) => {
    event.target.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.95)), url(${project.img})`
    event.target.style.backgroundSize = "cover"
  }

  const handleMouseLeave = (event) => {
    event.target.style.background = 'white'

  }

  return (
    <div className="card project"
          onMouseEnter = {handleMouseEnter}
          onMouseLeave= {handleMouseLeave}>
      <h4><a href={project.url} target="_blank" rel="noreferrer">{project.name.toUpperCase()}</a></h4>
      <h4>{project.position.toUpperCase()}</h4>
      <p id="start-date">{project.startDate}</p>
      <p>{project.description} <a href={project.github} target="_blank" rel="noreferrer">(Github)</a></p>
      <div className="dev-skills">
        {project.toolIcons.map(icon => <i key={icon} className={icon}></i>)}
      </div>
    </div>
  )
}

export default Project
