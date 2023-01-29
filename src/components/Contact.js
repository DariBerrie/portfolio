const Contact = ({project_sec, skillexp_sec}) => {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: (elementRef.current.offsetTop)-48,
      behavior: 'smooth'
    })
  }
  // const fixList = () => {
  //   const contacts = document.getElementById("contacts")
  //   console.log(contacts.getBoundingClientRect().top)
  //   if (contacts.getBoundingClientRect().top <= 69) {
  //     console.log("Line met!")
  //     // contacts.setAttribute('style', "position: fixed; top:0px;")
  //     // console.log(contacts)
  //   }
  // }
  // document.addEventListener('scroll', fixList)

  return (
   <div id="contacts">
      <ul className="contact-list">
        <li className="nav-link me-3" onClick={() => scrollToSection(project_sec)}>projects</li>
        <li className="nav-link" onClick={() => scrollToSection(skillexp_sec)}>skills & experience</li>
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
