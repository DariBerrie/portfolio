
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import Carousel from './components/Carousel'
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
    const url = 'https://portfolio-api-um8g.onrender.com'
    // const url = 'http://localhost:3001'

    axios.get(`${url}/projects`).then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
    axios.get(`${url}/jobs`).then(response => {
      console.log(response.data)
      setJobs(response.data)
    })
    axios.get(`${url}/schools`).then(response => {
      console.log(response.data)
      setSchools(response.data)
    //   setTimeout(() => {
    //     setLoading(false)
    // }, '5000')
      setLoading(false)
    })
  }
  useEffect(hook, [loading])

  return (

    <div id="app">
      {
        loading ?  (
          <div style={{padding:'35vh 0 0 0'}}>
              <PacmanLoader
                size ={50}
                color={'black'}
                loading={loading}  />
              <p className="mt-5 mb-2 text-muted animate__animated animate__flash animate__slower animate__infinite">api loading...</p>
              <p className="mt-2 text-muted">If the page doesn't load in 10 seconds, refresh.</p>
          </div> ) : (
      <div className="container fade-in">
        <div id="heading" className="d-flex flex-column align-items-center">
          <Contact project_sec={project_sec} skill_sec={skill_sec} exp_sec={exp_sec} />
          <Header project_sec={project_sec} />
        </div>
        <Carousel project_sec={project_sec} skill_sec={skill_sec} projects={projects} />
        <div className="row justify-content-between" ref={skill_sec}>
            <div id="skills-container" className="col-12 d-flex flex-row flex-wrap justify-content-center mt-5">
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
        <p className="text-center">Built by me with <span style={{color: '#8c52ff'}}>♥</span> & React.</p>
      </div>
        )
      }
    </div>
  )
}
export default App;
