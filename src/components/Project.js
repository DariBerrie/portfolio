const Project = ({project}) => {

  return (
    <div className="card project">
      <h4><a href={project.url}>{project.name.toUpperCase()}</a></h4>
      <h4>{project.position.toUpperCase()}</h4>
      <h5>{project.startDate}</h5>
      <p>{project.description} <a href={project.github}>(Github)</a></p>
      <div className="dev-skills">
        <i className="devicon-ruby-plain colored"></i>
        <i className="devicon-rails-plain colored"></i>
        <i className="devicon-postgresql-plain colored"></i>
        <i className="devicon-heroku-plain colored"></i>
        <i className="devicon-html5-plain colored"></i>
        <i className="devicon-css3-plain colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-bootstrap-plain colored"></i>
        <i className="devicon-photoshop-plain colored"></i>
      </div>
    </div>
  )
}

export default Project
