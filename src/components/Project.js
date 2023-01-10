const Project = ({project}) => {

  const handleMouseEnter = (event) => {
    event.target.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.90),rgba(255,255,255,0.1)), url(${project.img})`
    event.target.style.backgroundSize = "cover"
    event.target.innerHTML = `
      <h4><a href=${project.url} target="_blank" rel="noreferrer">${project.name.toUpperCase()}</a></h4>
      <h4 class="fw-bold"><a href=${project.github} target="_blank" rel="noreferrer">GITHUB</a></h4>
    `
  }

  const handleMouseLeave = (event) => {
    event.target.style.background = 'white'
    event.target.innerHTML = `
      <h4><a href=${project.url} target="_blank" rel="noreferrer">${project.name.toUpperCase()}</a></h4>
      <h4>${project.position.toUpperCase()}</h4>
      <p id="start-date">${project.startDate}</p>
      <p>${project.description}</p>
      <div class="dev-skills">
        ${project.toolIcons.map(icon => `<i class='${icon}'></i>`).join('')}
      </div>
    `
  }

  return (
    <div className="card project col-12 col-lg-6"
          onMouseEnter = {handleMouseEnter}
          onMouseLeave= {handleMouseLeave}>
      <h4><a href={project.url} target="_blank" rel="noreferrer">{project.name.toUpperCase()}</a></h4>
      <h4>{project.position.toUpperCase()}</h4>
      <p id="start-date">{project.startDate}</p>
      <p>{project.description}</p>
      <div className="dev-skills">
        {project.toolIcons.map(icon => <i key={icon} className={icon}></i>)}
      </div>
    </div>
  )
}

export default Project
