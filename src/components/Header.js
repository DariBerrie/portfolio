import Summary from "./Summary"
// import { gsap } from 'gsap'

const Header = () => {
  // gsap.from("#name", {y: -100, duration: 1})
  // gsap.from("#title", {x: -200, duration: .5})

  return (
    <div id="header">
      <h1 id="name">DARI GOLDMAN</h1>
      <h2 id="title">Full stack web developer ripe for picking 🍎</h2>
      <Summary />
    </div>
  )
}

export default Header
