const contacts = [
  { label: 'Email', value: 'josephine.broyles@gmail.com', href: 'mailto:josephine.broyles@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/josephine-broyles', href: 'https://linkedin.com/in/josephine-broyles' },
  { label: 'GitHub', value: 'github.com/josiebroyles', href: 'https://github.com/josiebroyles' },
  { label: 'Phone', value: '858.605.8396', href: 'tel:8586058396' },
]

export default function Contact() {
  return (
    <div className="stem-page">
      <p className="stem-section-title">Contact</p>

      <p style={{ fontSize: '0.9375rem', color: 'var(--s-muted)', marginBottom: 40, lineHeight: 1.7 }}>
        Open to research collaborations, internship opportunities, and conversations
        at the intersection of machine learning and biological systems.
      </p>

      <div className="contact-list">
        {contacts.map(c => (
          <a key={c.label} className="contact-item" href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            <span className="contact-item__label">{c.label}</span>
            <span className="contact-item__value">{c.value}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
