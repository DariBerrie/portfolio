
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import Contact from "./components/Contact"
import Header from "./components/Header"
import Project from "./components/Project"
import Job from "./components/Job"
import Skills from './components/Skills'
import Languages from './components/Languages'
import School from './components/School'
import { PacmanLoader } from 'react-spinners'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [jobs, setJobs] = useState([])
  const [schools, setSchools] = useState([])

  const project_sec = useRef(null)
  const skill_sec = useRef(null)
  const exp_sec = useRef(null)

  const hook = () => {
    // const url = 'https://portfolio-api-um8g.onrender.com'
    const url = 'http://localhost:3001'

    axios.get(`${url}/projects`).then(response => {
      setProjects(response.data)
    })
    axios.get(`${url}/jobs`).then(response => {
      setJobs(response.data)
    })
    axios.get(`${url}/schools`).then(response => {
      setSchools(response.data)
    })

    window.onload = (e) => {
      setTimeout(() => {
        setLoading(!e.isTrusted)
      }, '4000')
    }
  }
  useEffect(hook, [])

  return (

    <div id="app">
      {
        loading ?  (
          <span className="fade-out" style={{padding:'20vh 0 0 0'}}>
          <PacmanLoader
            size ={50}
            color={'black'}
            loading={loading}  />
          </span> ) : (
      <div className="container">
        <div id="heading" className="d-flex flex-column align-items-center">
          <Contact project_sec={project_sec} skill_sec={skill_sec} exp_sec={exp_sec} />
          <Header />
        </div>
        <div className="row justify-content-center">
          <div id="projects-container" ref={project_sec} className="col-12 d-flex flex-column justify-content-center align-items-center mb-5">
            <h2 className = "my-4">PROJECTS</h2>
            <div className="projects">
              {projects.map(project =>
                <Project key={project.id} project={project} /> )}
            </div>
        </div>
        <div className="row justify-content-between">
            <div id="skills-container" ref={skill_sec} className="col-12 d-flex flex-row flex-wrap justify-content-center">
              <Skills />
              <div className="card school">
                <h2 className="mb-2">EDUCATION</h2>
                {schools.map(school =>
                  <School key={school.id} school={school} />
                  )}
              </div>
              <div className="d-flex flex-column">
                <Languages />
              </div>
            </div>
        </div>
        <div className="row">
            <div id="jobs-container" ref={exp_sec} className="col-12 d-flex flex-column align-items-center">
              <h2 className="my-4">PROFESSIONAL EXPERIENCE</h2>
              <img id="people-person-img" src="people-person-img.png" alt="I'm a human essential oil diffuser!" />
              {jobs.map(job =>
                <Job key={job.id} job={job} />)}
            </div>
          </div>
        </div>
        <p className="text-center">Built by me with <span style={{color: '#8c52ff'}}>♥</span>, React & Node.js</p>
      </div>
        )
      }
    </div>
  )
}
export default App;
