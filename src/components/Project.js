const Project = ({project}) => {

  return (
    <div className="card project">
      <h4><a href={project.url} target="_blank" rel="noreferrer">{project.name.toUpperCase()}</a></h4>
      <h4>{project.position.toUpperCase()}</h4>
      <h5>{project.startDate}</h5>
      <p>{project.description} <a href={project.github} target="_blank" rel="noreferrer">(Github)</a></p>
      <div className="dev-skills">
        {project.toolIcons.map(icon => <i className={icon}></i>)}
      </div>
    </div>
  )
}

export default Project
