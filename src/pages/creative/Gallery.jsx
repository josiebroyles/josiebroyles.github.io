const pieces = [
  {
    title: 'Structured Blazer',
    meta: 'Patternmaking · Construction · 2025',
    note: 'Original pattern drafted from measurements. Double-breasted with shaped lapels.',
  },
  {
    title: 'Geometric Skirt Study',
    meta: 'Pattern Study · 2025',
    note: 'Exploration of flat-pattern geometry — asymmetric seaming and bias-cut panels.',
  },
  {
    title: 'Draped Evening Piece',
    meta: 'FAST at UCLA · 2025',
    note: 'Experimental draping on the stand — converted to flat pattern post-construction.',
  },
  {
    title: 'Tailored Trousers',
    meta: 'Patternmaking · 2024',
    note: 'Full seat and inseam adjustments from a base block. Welt pockets.',
  },
  {
    title: 'Etsy Collection — Accessories',
    meta: 'Small-Batch · 2023–Present',
    note: '74% YoY growth · 4.9★ rating · 96% shipping accuracy',
  },
  {
    title: 'Boolean Pattern Study',
    meta: 'Concept · 2025',
    note: 'A garment where the seam logic mirrors Boolean gate diagrams from computational work.',
  },
]

export default function Gallery() {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-header__title">Selected Work</h1>
        <p className="gallery-header__sub">2023 – Present &nbsp;·&nbsp; Fashion, pattern, and making</p>
      </div>

      <div className="gallery-grid">
        {pieces.map((p, i) => (
          <div key={i} className="gallery-card">
            <div className="gallery-card__image">
              <p className="gallery-card__placeholder">{p.note}</p>
            </div>
            <div className="gallery-card__info">
              <p className="gallery-card__title">{p.title}</p>
              <p className="gallery-card__meta">{p.meta}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-cta">
        <p className="gallery-cta__text">
          Ready-to-wear and made-to-order<br />pieces available in the shop.
        </p>
        <a
          href="https://www.sunshinewednesday.etsy.com"
          target="_blank"
          rel="noreferrer"
          className="gallery-cta__link"
        >
          Visit Etsy Shop ↗
        </a>
      </div>
    </div>
  )
}
