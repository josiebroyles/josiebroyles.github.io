const groups = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', note: 'primary — data analysis, ML, simulation' },
      { name: 'R', note: 'statistical analysis, bioinformatics, visualization' },
      { name: 'C++', note: 'systems programming, algorithms' },
      { name: 'Bash', note: 'scripting, HPC job submission' },
    ],
  },
  {
    title: 'Machine Learning & Statistics',
    items: [
      { name: 'Supervised Classification', note: 'Random Forest, logistic regression, SVM' },
      { name: 'Statistical Genetics', note: 'GWAS, polygenic risk scores, heritability' },
      { name: 'Bayesian Modeling', note: 'prior specification, posterior inference' },
      { name: 'Feature Engineering', note: 'high-dimensional biological data' },
      { name: 'Data Preprocessing', note: 'wrangling, cleaning, normalization' },
    ],
  },
  {
    title: 'Bioinformatics',
    items: [
      { name: 'RNA-seq Analysis', note: 'alignment, differential expression, QC' },
      { name: 'Gene Expression', note: 'GEO datasets, pathway enrichment' },
      { name: 'cfDNA Analysis', note: 'cell-free DNA, liquid biopsy methods' },
      { name: 'fMRI Preprocessing', note: 'resting-state, infant neuroimaging' },
      { name: 'Genomic Data Pipelines', note: 'phenotypic + genotypic data integration' },
    ],
  },
  {
    title: 'Tools & Infrastructure',
    items: [
      { name: 'HPC / Hoffman2', note: 'job scheduling, parallelization, SLURM' },
      { name: 'Git / GitHub', note: 'version control, reproducible research' },
      { name: 'Jupyter / R Markdown', note: 'literate programming, reports' },
      { name: 'pandas / NumPy', note: 'data manipulation' },
      { name: 'scikit-learn', note: 'model training and evaluation' },
    ],
  },
]

export default function Skills() {
  return (
    <div className="stem-page">
      <p className="stem-section-title">Skills</p>
      <div className="skills-grid">
        {groups.map(g => (
          <div key={g.title} className="skills-group">
            <div className="skills-group__title">{g.title}</div>
            <ul className="skills-group__items">
              {g.items.map(item => (
                <li key={item.name}>
                  {item.name}
                  {item.note && <span>{item.note}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
