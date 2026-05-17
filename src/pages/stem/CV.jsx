export default function CV() {
  return (
    <div className="stem-page">
      <p className="stem-section-title">Curriculum Vitae</p>

      <div className="cv-block">
        <a
          className="cv-download"
          href="/cv.pdf"
          download="Josephine_Broyles_CV.pdf"
        >
          ↓ Download CV (PDF)
        </a>

        <p className="cv-note">
          B.S. Computational &amp; Systems Biology, Minor in Mathematics — UCLA<br />
          Major GPA: 3.8 &nbsp;·&nbsp; Expected graduation: 2027
        </p>

        <hr className="stem-rule" style={{ margin: '8px 0' }} />

        <p className="stem-section-title" style={{ marginBottom: 16 }}>Education</p>
        <div className="research-item" style={{ borderTop: '1px solid var(--s-border)' }}>
          <div className="research-item__header">
            <span className="research-item__role">B.S. Computational &amp; Systems Biology</span>
            <span className="research-item__period">2023 – Present</span>
          </div>
          <div className="research-item__org">University of California, Los Angeles — GPA 3.8</div>
          <p className="research-item__body">
            Minor in Mathematics. Relevant coursework: Molecular &amp; Cellular Biology, Genetics
            &amp; Human Biology, Differential Equations, Linear Algebra &amp; Multivariable
            Calculus, Probability &amp; Bayesian Modeling, Data Structures &amp; Algorithms.
          </p>
        </div>

        <div className="research-item">
          <div className="research-item__header">
            <span className="research-item__role">High School Diploma</span>
            <span className="research-item__period">2023</span>
          </div>
          <div className="research-item__org">Mt. Carmel High School — Weighted GPA: 4.3</div>
        </div>
      </div>
    </div>
  )
}
