import "./CertificationShowcase.css";

export default function CertificationShowcase({
  items,
  variant = "default",
  className = "",
}) {
  return (
    <ul
      className={`cert-showcase cert-showcase--${variant} ${className}`.trim()}
      aria-label="Certifications"
    >
      {items.map((c, idx) => (
        <li
          key={c.key}
          className="cert-showcase-card"
          data-reveal
          style={{ "--d": `${idx * 70}ms` }}
        >
          <div className="cert-showcase-glow" aria-hidden="true" />
          <div className="cert-showcase-top">
            <div className="cert-showcase-badge">
              <img src={c.badge} alt={`${c.title} ${c.subtitle}`} />
            </div>
            <div className="cert-showcase-meta">
              <p className="cert-showcase-title">{c.title}</p>
              <p className="cert-showcase-sub">{c.subtitle}</p>
            </div>
          </div>
          <p className="cert-showcase-blurb">{c.blurb}</p>
        </li>
      ))}
    </ul>
  );
}
