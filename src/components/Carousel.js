import Slider from 'react-slick'
import { Image } from 'react-bootstrap'
import Project from './Project'

const Carousel = ({project_sec, skill_sec, projects}) => {

  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    accessibility: true,
    arrows: true,
    centerPadding: '60px',
    slidesToShow: 2,
    speed: 500
  }

  const scrollToSection = (elementRef) => {
    console.log(elementRef.current.offsetTop)
    window.scrollTo({
      top: (elementRef.current.offsetTop)-48,
      behavior: 'smooth'
    })
  }

  return (
    <div className="row" ref={project_sec}>
      <div id="projects-container">
        <h2 id="projects-header" className= "mb-3 text-center">PROJECTS</h2>

        <p className="fs-5 mb-5">After spending two years studying computer science and web development, I'm ready to see my ideas on the screen.
        Take a look at my recent projects! Many are primarily coded with the Ruby on Rails framework, but I'm currently getting comfortable
        with Node.js and React.</p>

        <Slider {...settings}>
          {projects.reverse().map(project =>
            <Project key={project.id} project={project} /> )}
        </Slider>

        <Image src="down-arrow.png" alt="Down Arrow to Projects" style={{width: "3em", cursor: "pointer", marginTop: "4em"}}
          className="animate__animated animate__bounce animate__delay-5s align-self-center"
          onClick={() => scrollToSection(skill_sec)} />
    </div>
  </div>
  )
}

export default Carousel
