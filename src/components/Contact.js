const Contact = ({project_sec, skillexp_sec}) => {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: (elementRef.current.offsetTop)-48,
      behavior: 'smooth'
    })
  }

  return (
   <div id="contacts">
      <ul className="contact-list">
        <li className="nav-link me-3" onClick={() => scrollToSection(project_sec)}>projects</li>
        <li className="nav-link" style={{paddingRight: '1vw'}}onClick={() => scrollToSection(skillexp_sec)}>skills & experience</li>
        </ul>
      <ul id="outside-links" className="contact-list">
        <li className="me-3"><a href="https://www.linkedin.com/in/darigoldman"
              target="_blank" rel="noreferrer">linkedin</a></li>
        <li className="me-3"><a href="https://www.github.com/DariBerrie"
              target="_blank" rel="noreferrer">github</a></li>
      </ul>
    </div>
  )
}

export default Contact
