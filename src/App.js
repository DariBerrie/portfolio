
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
  const skillexp_sec = useRef(null)

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
                size ={20}
                color={'black'}
                loading={loading}  />
              <p className="mt-3 mb-2 text-muted animate__animated animate__flash animate__slower animate__infinite"
                  style={{padding: '0 0 0 15vw'}}>
                api loading...</p>
              <p className="mt-2 text-muted">If the page doesn't load in 10 seconds, refresh.</p>
          </div> ) : (
      <div className="container fade-in">
         <Contact project_sec={project_sec} skillexp_sec={skillexp_sec} />
        <div id="page-one" className="row">
          <Header project_sec={project_sec} skillexp_sec={skillexp_sec} />
        </div>
        <div id="page-two" className="row">
        <Carousel project_sec={project_sec} skillexp_sec={skillexp_sec} projects={projects} />
        </div>
        <div id="page-three" ref={skillexp_sec} className="row">
          <h2 id="skills-header">SKILLS</h2>
          <div id="skills-container" className="col-12 d-flex flex-row flex-wrap justify-content-center">
            <Skills />
            <div className="card school">
              <h2 className="mb-2">EDUCATION</h2>
              {schools.map(school =>
                <School key={school.id} school={school} />
                )}
            </div>
            <Languages />
          </div>
          <div className="row">
            <div id="jobs-container" className="col-12 d-flex flex-column align-items-center">
              <h2 id="job-header" className="my-4 text-center">PROFESSIONAL EXPERIENCE</h2>
              <img id="people-person-img" src="people-person-img.png" alt="I'm a human essential oil diffuser!" />
              {jobs.map(job =>
                <Job key={job.id} job={job} />)}
            </div>
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
