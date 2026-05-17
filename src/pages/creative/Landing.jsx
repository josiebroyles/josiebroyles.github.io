import { Link } from 'react-router-dom'
import { useTransition } from '../../context/TransitionContext'

function HMImage({ className, style, label, src }) {
  return (
    <div className={`hm-img ${className || ''}`} style={style}>
      {src ? (
        <div className="hm-img__inner" style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      ) : (
        <div className="hm-img__inner">
          <span className="hm-img__label">{label}</span>
        </div>
      )}
    </div>
  )
}

export default function Landing() {
  const { goTo } = useTransition()

  return (
    <div className="hm-page">

      {/* Nav */}
      <nav className="hm-nav">
        <div className="hm-nav__links">
          <a href="#collection">collection</a>
          <span className="hm-nav__dot">·</span>
          <a href="#about">about</a>
          <span className="hm-nav__dot">·</span>
          <a href="https://www.sunshinewednesday.etsy.com" target="_blank" rel="noreferrer">shop</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hm-hero">
        <HMImage className="hm-img--hero" src="/images/sunshinewednesday.png" label="hero image" />
        <p className="hm-hero__honorable">Honorable</p>
      </section>
      <p className="hm-mention">Mention</p>
      <div className="hm-title-footer">
        <button className="hm-title-home" onClick={() => goTo('/')}>← Home</button>
        <p className="hm-ss26">SS26</p>
      </div>

      {/* Editorial split */}
      <section className="hm-split" id="collection">
        <div className="hm-split__left">
          <HMImage className="hm-img--portrait" src="/images/portrait.png" label="portrait" />
        </div>
        <div className="hm-split__right">
          <p className="hm-split__text">
            A collection rooted in the refusal to grow out of joy. My line pays homage to vintage
            silhouettes, saturated in color, with a hint of whimsy. Decorated in rosette ribbons
            of recognition: the participation trophies, county fair ribbons, and classroom gold
            stars that once felt like everything. Every piece is designed, patterned, and
            handmade by me, from first sketch to final stitch.
          </p>
          <HMImage className="hm-img--square" src="/images/square.png" label="square" />
        </div>
      </section>

      {/* Full-width image */}
      <section className="hm-full">
        <HMImage className="hm-img--landscape" src="/images/landscape.png" label="landscape" />
        <p className="hm-full__caption">made slowly, made to last</p>
      </section>

      {/* Grid */}
      <section className="hm-grid" id="about">
        <HMImage className="hm-img--grid" src="/images/grid1.png" label="grid 1" />
        <HMImage className="hm-img--grid" src="/images/grid2.png" label="grid 2" />
        <HMImage className="hm-img--grid" src="/images/grid3.png" label="grid 3" />
        <div className="hm-grid__footer">
          <div className="hm-runway-block">
            <p className="hm-runway">Runway: coming May 22nd</p>
            <p className="hm-runway__sub">Fashion and Student Trends (FAST) at UCLA</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hm-footer">
        <p className="hm-footer__brand">Honorable Mention</p>
        <p className="hm-footer__copy">© 2026</p>
        <button className="hm-footer__back" onClick={() => goTo('/')}>← Home</button>
      </footer>

    </div>
  )
}
