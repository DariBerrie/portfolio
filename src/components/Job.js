const Job = ({job}) => {
  return (
    <div className="card job d-flex flex-row flex-wrap">
      <div className="col-sm-12 col-lg-8 job-details">
        <h4>{job.title.toUpperCase()}</h4>
        <p className="job-dates">{job.company}, {job.dates}</p>
        <p>{job.description}</p>
      </div>
      <div className="col-sm-12 col-lg-4 job-takeaway">
        <h5>SOFT SKILLS</h5>
        <p>{job.takeaway}</p>
      </div>
    </div>
  )
}

export default Job
