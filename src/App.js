import axios from 'axios'
import { useState, useEffect } from 'react'
import Contact from "./components/Contact"
import Header from "./components/Header"
import Project from "./components/Project"
import Job from "./components/Job"
import Skills from './components/Skills'
import Languages from './components/Languages'
import Interest from './components/Interest'

const App = () => {
  const [projects, setProjects] = useState([])
  const [jobs, setJobs] = useState([])
  const [interests, setInterests] = useState([])

  const hook = () => {
    axios.get('http://localhost:3002/projects').then(response => {
      setProjects(response.data)
    })
    axios.get('http://localhost:3002/jobs').then(response => {
      setJobs(response.data)
    })
    axios.get('http://localhost:3002/interests').then(response => {
      setInterests(response.data)
    })
  }
  useEffect(hook, [])

  return (
    <div className="container">
      <Contact />
      <Header />
      <div className="d-flex flex-row justify-content-around">
        <div className="col-8 section-container">
          <h2>PROJECTS</h2>
          <div className="d-flex flex-row flex-wrap">
            {projects.map(project =>
              <Project key={project.id} project={project} /> )}
          </div>
        </div>
        <div className="col-4 section-container">
          <h2>TECHNICAL SKILLS</h2>
          <Skills />
          <h2>LANGUAGES</h2>
          <Languages />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center section-container">
        <img id="people-person-img" src="people-person-img.png" alt="I'm a human essential oil diffuser!" />
        <h2 className="mb-4">PROFESSIONAL EXPERIENCE</h2>
        {jobs.map(job =>
          <Job key={job.id} job={job} />)}
      </div>
      <div className="d-flex flex-column align-items-center section-container">
        <h2 className="mb-4">INTERESTS</h2>
        <ul id="interests-list">
        {interests.map(interest =>
          <Interest key={interest.id} interest={interest} />)}
        </ul>
      </div>
      <p className="text-center">Built by me with ♥, React & Node.js</p>
    </div>
  )
}
export default App;
