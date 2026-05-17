import { NavLink } from 'react-router-dom'
import { useTransition } from '../../context/TransitionContext'

export default function CreativeNav() {
  const { goTo } = useTransition()

  return (
    <nav className="creative-nav">
      <span className="creative-nav__brand">Honorable Mention</span>
      <ul className="creative-nav__links">
        <li><NavLink to="/creative">Work</NavLink></li>
        <li><NavLink to="/creative/gallery">Gallery</NavLink></li>
        <li>
          <button className="creative-nav__back" onClick={() => goTo('/')}>
            ← main site
          </button>
        </li>
      </ul>
    </nav>
  )
}
