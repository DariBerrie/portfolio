import Project from './Project'

const Carousel = ({project_sec, projects}) => {

  // const settings = {
  //   className: 'center',
  //   dots: true,
  //   accessibility: true,
  //   arrows: false,
  //   infinite: false,
  //   initialSlide: 0,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   centerPadding: '50px',
  //   speed: 500,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // }

  // const scrollToSection = (elementRef) => {
  //   console.log(elementRef.current.offsetTop)
  //   window.scrollTo({
  //     top: (elementRef.current.offsetTop)-48,
  //     behavior: 'smooth'
  //   })
  // }

  return (
      <div className="col d-flex flex-column align-items-center" ref={project_sec}>
        <h2 id="projects-header" className= "mb-3 text-center">PROJECTS</h2>

        <p id="projects-summary">After spending two years studying computer science and web development, I'm ready to see my ideas on the screen.
        Take a look at my recent projects! Many are primarily coded with the Ruby on Rails framework, but I'm currently getting comfortable
        with Node.js and React.</p>

        <div id="projects" className="d-flex flex-row flex-wrap justify-content-center">
          {projects.map(project =>
            <Project key={project.id} project={project} /> )}
        </div>
      </div>
  )
}

export default Carousel
