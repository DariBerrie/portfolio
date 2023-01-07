const Job = ({job}) => {
  return (
    <div className="card job d-flex flex-row">
      <div className="job-details">
        <h4>{job.title.toUpperCase()}</h4>
        <p className="job-dates">{job.company}, {job.dates}</p>
        <p>{job.description}</p>
      </div>
      <div className="job-takeaway">
        <h5>SOFT SKILLS</h5>
        <p>{job.takeaway}</p>
      </div>
    </div>
  )
}

export default Job
