import axios from 'axios'
import { useState, useEffect } from 'react'
import Contact from "./components/Contact"
import Header from "./components/Header"
import Project from "./components/Project"
import Job from "./components/Job"
import Skills from './components/Skills'
import Languages from './components/Languages'
import Interests from './components/Interests'
import School from './components/School'

const App = () => {
  const [projects, setProjects] = useState([])
  const [jobs, setJobs] = useState([])
  const [schools, setSchools] = useState([])

  const hook = () => {
    const url = 'https://portfolio-api-um8g.onrender.com'
    // const url = 'http://localhost:3001'

    axios.get(`${url}/projects`).then(response => {
      setProjects(response.data)
    })
    axios.get(`${url}/jobs`).then(response => {
      setJobs(response.data)
    })
    axios.get(`${url}/schools`).then(response => {
      setSchools(response.data)
    })
  }
  useEffect(hook, [])

  return (
    <div className="container">

      <div id="heading" class="d-flex flex-column align-items-start">
        <Contact />
        <Header />
      </div>
      <div className="row d-flex flex-row justify-content-around">
        <div id="experience-container" className="col-md-12 col-lg-8 d-flex flex-column align-items-center">
          <h2 className = "my-4">PROJECTS</h2>
          <div className="row d-flex align-items-center">
            {projects.map(project =>
              <Project key={project.id} project={project} /> )}
          </div>
          <div id="jobs-container" className="d-flex flex-column align-items-center">
            <img id="people-person-img" src="people-person-img.png" alt="I'm a human essential oil diffuser!" />
            <h2 className="my-4">PROFESSIONAL EXPERIENCE</h2>
            {jobs.map(job =>
              <Job key={job.id} job={job} />)}
          </div>
        </div>
        <div id="skills-container" className="col-md-12 col-lg-4 d-flex flex-column align-items-center">
          <h2 className="my-3">TECHNICAL SKILLS</h2>
          <Skills />
          <h2>EDUCATION</h2>
          <div className="card school">
            {schools.map(school =>
              <School key={school.id} school={school} />
              )}
          </div>
          <h2>LANGUAGES</h2>
          <Languages />
          <h2>INTERESTS</h2>
          <Interests />
        </div>
      </div>
      <p className="text-center">Built by me with <span style={{color: '#8c52ff'}}>♥</span>, React & Node.js</p>
    </div>
  )
}
export default App;
