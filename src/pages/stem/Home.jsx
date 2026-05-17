import { Link } from 'react-router-dom'
import { useTransition } from '../../context/TransitionContext'

export default function Home() {
  const { goTo } = useTransition()
  return (
    <div className="stem-page stem-hero">
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
        <img
          src="/images/headshot.png"
          alt="Josephine Broyles"
          style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <p className="stem-eyebrow" style={{ marginBottom: 0, fontSize: '1rem' }}>Josephine Broyles</p>
      </div>

      <h1 className="stem-hero__name">
        Computational<br />biologist.
      </h1>

      <p className="stem-hero__bio">
        I am a third-year Computational Biology major + Mathematics minor at UCLA. I study how genes shape the brain, working at the intersection of machine learning, statistical genetics, and neuroscience.
      </p>

      <div className="stem-hero__current">
        <span className="stem-hero__label">Currently</span>
        <span className="stem-hero__role">
          Bioinformatics Programming Intern, Hernandez Lab @ UCLA<br />
          Statistical genetics &amp; ML pipelines for autism genetics + phenotypes
        </span>
      </div>

      <nav className="stem-nav-links">
        <Link to="/research" className="stem-nav-link">
          Research
          <span className="stem-nav-link__arrow">→</span>
        </Link>
        <Link to="/skills" className="stem-nav-link">
          Skills
          <span className="stem-nav-link__arrow">→</span>
        </Link>
        <Link to="/cv" className="stem-nav-link">
          CV
          <span className="stem-nav-link__arrow">→</span>
        </Link>
        <button onClick={() => goTo('/creative')} className="stem-nav-link" style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', padding: '20px 0', borderBottom: '1px solid var(--s-border)' }}>
          Creative Direction + Fashion Design
          <span className="stem-nav-link__arrow">→</span>
        </button>
        <Link to="/contact" className="stem-nav-link">
          Contact
          <span className="stem-nav-link__arrow">→</span>
        </Link>
      </nav>
    </div>
  )
}
