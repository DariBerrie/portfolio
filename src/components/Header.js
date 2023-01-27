import Summary from "./Summary"
import Typed from 'typed.js'
import React from 'react'

// import { gsap } from 'gsap'

const Header = () => {
  // gsap.from("#name", {y: -100, duration: 1})
  // gsap.from("#title", {x: -200, duration: .5})
  const el = React.useRef(null)
  const typed = React.useRef(null)
  React.useEffect(() => {
    const options = {
      strings: ['Full stack storyteller', 'Full stack mediator', 'Full stack developer', 'Full stack team player'],
      smartBackspace: true,
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
      loop: true
    }
    typed.current = new Typed(el.current, options)
    return () => {
      typed.current.destroy()
    }
  }, [])

  return (
    <div id="header">
      <h1 id="name">DARI GOLDMAN</h1>
      <h2 id="title" style={{height:'40px'}}><span style={{whiteSpace: 'normal'}} ref={el} /></h2>
      <Summary />
    </div>
  )
}

export default Header
