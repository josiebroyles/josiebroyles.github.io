const positions = [
  {
    role: 'Computational Biology Researcher',
    org: 'Hernandez Lab, UCLA',
    period: 'Sept 2025 – Present',
    body: `I am currently developing end-to-end computational pipelines to investigate the genetic architecture of autism and how neurodevelopmental outcomes are influenced by genetics. My work involves processing large-scale genomic data, computing polygenic risk scores (PRS), and integrating those PRS with resting-state fMRI data to map cerebellar-cortical functional connectivity. This analysis is followed by statistical tests conducted in R, including regressions, mediation analysis, FDR correction, and dimensionality reduction and clustering algorithms. Additional work involves multi-modal data integration, using Similarity Network Fusion (SNF). Data analysis pipelines are written in R, and high-performance computing (HPC) pipelines are written in bash and run at scale on HPC infrastructure, handling datasets with hundreds of thousands of genetic predictors across hundreds of subjects.`,
    tags: ['Python', 'R', 'Statistical Genetics', 'Polygenic Risk Scores', 'fMRI', 'HPC / Hoffman2', 'GWAS'],
    image: '/images/fmri.png',
    imageCaption: 'Resting-state fMRI data from infant cohort',
  },
  {
    role: 'Bioinformatics Programming Intern',
    org: 'Sebat Lab, UCSD',
    period: 'June 2025 – Sept 2025',
    body: `Applied classical machine learning classifiers to psychiatric gene profiles for autism diagnosis prediction. Preprocessed and formatted large-scale genomic and phenotypic datasets, with emphasis on feature engineering and handling high-dimensional biological data.`,
    tags: ['Python', 'scikit-learn', 'Genomic Preprocessing', 'Feature Engineering', 'ML Classification'],
  },
  {
    role: 'Undergraduate Researcher',
    org: 'Zaitlen Lab, UCLA',
    period: 'Nov 2024 – June 2025',
    body: `Developed a predictive computational model using cell-free DNA (cfDNA) signatures in ALS patients to predict disease presence or absence. Built statistical and ML pipelines on challenging low-signal biological data, gaining core skills in reproducible research and data visualization.`,
    tags: ['Python', 'R', 'cfDNA', 'ALS', 'Statistical Modeling', 'Data Visualization'],
  },
  {
    role: 'Research Intern (Wet Lab)',
    org: 'Gur-Cohen Lab, Sanford Consortium for Regenerative Medicine, UCSD',
    period: 'June 2024 – Sept 2024',
    body: `Studied stem cell migration in hair follicles and their behavior in cancer contexts. Performed in vitro and in vivo experiments including tissue culture, immunostaining, and fluorescence microscopy. Developed project management and cross-disciplinary communication skills.`,
    tags: ['Tissue Culture', 'Immunostaining', 'Microscopy', 'In Vivo / In Vitro', 'Stem Cell Biology'],
    image: '/images/wetlab.png',
    imageCaption: 'Immunostaining — Gur-Cohen Lab, UCSD',
  },
]

const projects = [
  {
    role: 'WonkyKong — Video Game',
    org: 'Independent Project',
    period: '2024',
    body: `Built a fully playable Donkey Kong–style game in C++ from scratch. Implemented all backend game logic including collision detection, real-time physics, and OOP-based behavior for all dynamic entities (Mario, DK, Koopas, fireballs, rolling barrels).`,
    tags: ['C++', 'OOP', 'Game Architecture', 'Physics / Collision'],
  },
  {
    role: 'Boolean Logic in Immune Response Promoters',
    org: 'Independent Project',
    period: '2024',
    body: `Built and analyzed mathematical models of Boolean logic governing immune response-regulating promoters. Generated simulations and publication-quality figures characterizing how promoter combinatorics shape transcriptional outcomes.`,
    tags: ['Python', 'Mathematical Modeling', 'Simulation', 'Immunology'],
    image: '/images/boolean.png',
    imageCaption: 'Promoter architecture Boolean logic model',
  },
  {
    role: 'KDM3A-Regulated Genes in Breast Cancer',
    org: 'Independent Project — NIH GEO Public Data',
    period: '2024',
    body: `A foundational early project from when I was first exploring bioinformatics. Analyzed gene expression data from the NIH GEO database to identify KDM3A-regulated genes in breast cancer — basic exploratory work that helped me get comfortable with R, statistical thinking, and working with public genomic datasets.`,
    tags: ['R', 'Gene Expression', 'RNA-seq', 'NIH GEO', 'Differential Expression'],
    image: '/images/practice.png',
    imageCaption: 'Exploratory gene expression analysis',
  },
]

function ResearchItem({ role, org, period, body, tags, image, imageCaption }) {
  return (
    <div className="research-item">
      <div className="research-item__header">
        <span className="research-item__role">{role}</span>
        <span className="research-item__period">{period}</span>
      </div>
      <div className="research-item__org">{org}</div>
      <p className="research-item__body">{body}</p>
      {image && (
        <figure style={{ margin: '16px 0' }}>
          <img
            src={image}
            alt={imageCaption}
            style={{ width: '100%', maxHeight: 220, objectFit: 'contain', display: 'block' }}
          />
          {imageCaption && (
            <figcaption style={{ fontSize: '0.75rem', color: 'var(--s-muted)', marginTop: 6 }}>
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )}
      <div className="research-item__tags">
        {tags.map(t => <span key={t} className="research-tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Research() {
  return (
    <div className="stem-page">
      <p className="stem-section-title">Research Experience</p>
      <div className="research-list">
        {positions.map(p => <ResearchItem key={p.org + p.period} {...p} />)}
      </div>

      <hr className="stem-rule" />

      <p className="stem-section-title">Independent Projects</p>
      <div className="research-list">
        {projects.map(p => <ResearchItem key={p.role} {...p} />)}
      </div>
    </div>
  )
}
