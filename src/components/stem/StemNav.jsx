import { NavLink } from 'react-router-dom'

export default function StemNav() {
  return (
    <nav className="stem-nav">
      <span className="stem-nav__brand">JB</span>
      <ul className="stem-nav__links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/research">Research</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/cv">CV</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
