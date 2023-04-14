
import { useRef } from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Job from "./components/Job"
import Skills from './components/Skills'
import Languages from './components/Languages'
import School from './components/School'


const App = () => {

  const project_sec = useRef(null)
  const skillexp_sec = useRef(null)

  const projects = [
  {
    "id": 1,
    "name": "Loopy",
    "position": "Lead Developer",
    "startDate": "November 2022",
    "description": "An Airbnb marketplace clone for fiber enthusiasts using Stripe API created at Le Wagon",
    "url": "http://www.loopy.website",
    "github": "https://github.com/DariBerrie/loopyex",
    "toolIcons": [
      "devicon-ruby-plain colored",
      "devicon-rails-plain colored",
      "devicon-postgresql-plain colored",
      "devicon-heroku-plain colored",
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-sass-original colored",
      "devicon-javascript-plain colored",
      "devicon-bootstrap-plain colored"
    ],
    "img": "loopy-horizontal.jpg"
  },
  {
    "id": 2,
    "name": "Ouicity",
    "position": "Lead Developer",
    "startDate": "December 2022",
    "description": "A web app connecting urban stakeholders with an interactive approach using MapBox API created at Le Wagon",
    "url": "http://ouicity.me",
    "github": "https://github.com/DariBerrie/ouicity",
    "toolIcons": [
      "devicon-ruby-plain colored",
      "devicon-rails-plain colored",
      "devicon-postgresql-plain colored",
      "devicon-heroku-plain colored",
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-sass-original colored",
      "devicon-javascript-plain colored",
      "devicon-bootstrap-plain colored",
      "devicon-figma-plain colored",
      "devicon-photoshop-plain colored"
    ],
    "img": "ouicity-horizontal.jpg"
  },
  {
    "id": 3,
    "name": "Evidens",
    "position": "Solo Developer",
    "startDate": "December 2022",
    "description": "A news/blog app created over one day during a solo product sprint for France's WebDev professional certification",
    "url": "https://github.com/DariBerrie/news-app",
    "github": "https://github.com/DariBerrie/news-app",
    "toolIcons": [
      "devicon-ruby-plain colored",
      "devicon-rails-plain colored",
      "devicon-postgresql-plain colored",
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-sass-original colored",
      "devicon-javascript-plain colored",
      "devicon-bootstrap-plain colored"
    ],
    "img": "evidens-horizontal.jpg"
  },
  {
    "id": 4,
    "name": "Cover Letter Bot",
    "position": "Solo Developer",
    "startDate": "January 2023",
    "description": "A tongue-in-cheek app to poke fun at the hiring process using OpenAI and Quill",
    "url": "https://cover-letter-bot.onrender.com/",
    "github": "https://github.com/DariBerrie/cover-letter-bot",
    "toolIcons": [
      "devicon-react-original colored",
      "devicon-nodejs-plain colored",
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-sass-original colored",
      "devicon-javascript-plain colored",
      "devicon-bootstrap-plain colored"
    ],
    "img": "cover-horizontal.jpg"
  },
  {
    "id": 5,
    "name": "Illuminate",
    "position": "Lead Developer",
    "startDate": "March 2023",
    "description": "A QR code scanning app improving the beauty shopping experience for the visually-impaired using ZXing Library",
    "url": "https://illuminate-us.onrender.com/",
    "github": "https://github.com/SIFAR101/Illuminate",
    "toolIcons": [
      "devicon-ruby-plain colored",
      "devicon-rails-plain colored",
      "devicon-postgresql-plain colored",
      "devicon-figma-plain colored",
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-sass-original colored",
      "devicon-javascript-plain colored",
      "devicon-bootstrap-plain colored"
    ],
    "img": "illuminate-horizontal.png"
  }
  ]
  const jobs = [
    {
      "id": 1,
      "title": "Digital Media Manager",
      "company": "Club Med Resorts",
      "dates": "2015-2017",
      "description": "Oversaw the digital communication and social media accounts for top resorts in Florida, Mexico and Guadeloupe. Transitioned resorts to an information and promotional resort television channel.",
      "takeaway": "Storytelling | Aesthetic presentation | Resourcefulness | Technical aptitude | Self-directed"
    },
    {
      "id": 2,
      "title": "Guest Relations Agent & Manager",
      "company": "Club Med Resorts",
      "dates": "2017-2019",
      "description": "Partnered with resort teams to ensure a positive guest experience while meeting sales goals and KPIs in Florida and the French Alps.",
      "takeaway": "Team management | Adaptable | Quick and effective under pressure | Empathetic | Collaboration | Creativity"
    },
    {
      "id": 3,
      "title": "Customer Happiness Manager",
      "company": "Reedsy",
      "dates": "2020 to present",
      "description": "Providing support to authors and creative professionals on the platform while optimizing conversion. Created new standards for tracking conversion and analyzing data from reviews and Net Promoter Scores.",
      "takeaway": "Listening & understanding | Strong written communication | Presentation | Problem-solving | Research | Dispute Resolution "
    },
    {
      "id": 4,
      "title": "Teaching Assistant",
      "company": "Le Wagon",
      "dates": "January 2023 to present",
      "description": "Guiding and mentoring students on their journey to becoming full-stack web developers",
      "takeaway": "Problem-solving | Instructive | Positive | Social & Emotional Intelligence | Adaptability"
    }
  ]
  const schools = [
    {
      "id": 1,
      "name": "Le Wagon",
      "diploma": "Full-Stack Web Development Certificate"
    },
    {
      "id": 2,
      "name": "University of the People",
      "diploma": "Associate's in Computer Science"
    },
    {
      "id": 3,
      "name": "American University of Paris",
      "diploma": "Bachelor's in Global Communications"
    }
  ]

  return (

    <div id="app">
      {
         (
      <div className="container fade-in">
         <Contact project_sec={project_sec} skillexp_sec={skillexp_sec} />
        <div id="page-one" className="row">
          <Header project_sec={project_sec} skillexp_sec={skillexp_sec} />
        </div>
        <div id="page-two" className="row">
        <Carousel project_sec={project_sec} skillexp_sec={skillexp_sec} projects={projects.reverse()} />
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
