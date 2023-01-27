const Contact = ({project_sec, skill_sec, exp_sec}) => {

  const scrollToSection = (elementRef) => {
    console.log(elementRef.current.offsetTop)
    window.scrollTo({
      top: (elementRef.current.offsetTop)-48,
      behavior: 'smooth'
    })
  }

  return (
    <ul id="contact-list">
      <li className="nav-link" onClick={() => scrollToSection(project_sec)}>projects</li>
      <li className="nav-link" onClick={() => scrollToSection(skill_sec)}>skills</li>
      <li className="nav-link" onClick={() => scrollToSection(exp_sec)}>experience</li>
      <li><a href="https://www.linkedin.com/in/darigoldman"
             target="_blank" rel="noreferrer">linkedin</a></li>
      <li><a href="https://www.github.com/DariBerrie"
             target="_blank" rel="noreferrer">github</a></li>
      <li><a href="mailto:hello@dari.codes?subject=Hi, I loved your website!">email</a></li>
    </ul>
  )
}

export default Contact
