import Summary from "./Summary"
import Typed from 'typed.js'
import React from 'react'
import Image from 'react-bootstrap/Image'

const scrollToSection = (elementRef) => {
  console.log(elementRef.current.offsetTop)
  window.scrollTo({
    top: (elementRef.current.offsetTop)-48,
    behavior: 'smooth'
  })
}

const Header = ({project_sec}) => {
  const el = React.useRef(null)
  const typed = React.useRef(null)
  React.useEffect(() => {
    const options = {
      strings: ['Full stack storyteller', 'Full stack mediator', 'Full stack developer'],
      smartBackspace: true,
      typeSpeed: 60,
      backSpeed: 60,
      showCursor: false,
      loop: false
    }
    typed.current = new Typed(el.current, options)
    return () => {
      typed.current.destroy()
    }
  }, [])

  return (
    <div id="header">
      <Image roundedCircle src="DariPortfolio.jpeg" alt="Headshot of Dari" style={{width: "13em", marginBottom:"2em"}}/>
      <h1 id="name" className="text-center">DARI GOLDMAN</h1>
      <h2 id="title" style={{height:'40px', textAlign: 'center'}}><span style={{whiteSpace: 'normal'}} ref={el} /></h2>
      <Summary />
      <Image src="down-arrow.png" alt="Down Arrow to Projects" style={{width: "3em", cursor: "pointer"}}
             className="animate__animated animate__bounce animate__delay-5s"
             onClick={() => scrollToSection(project_sec)} />
    </div>
  )
}

export default Header
