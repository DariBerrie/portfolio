const Project = ({project}) => {

  return (
    <div className="card project col-12 col-lg-6">
      <a href={project.url} target="_blank" rel="noreferrer">
        <img className="project-img" src={project.img} alt="Screenshot of Project"/>
      </a>     
      <h4><a href={project.github} target="_blank" rel="noreferrer">{project.name.toUpperCase()} <i class="devicon-github-original"></i></a></h4>
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
