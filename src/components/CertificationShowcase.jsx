import "./CertificationShowcase.css";

export default function CertificationShowcase({ items }) {
  return (
    <div className="cert-grid">
      {items.map((item, index) => (
        <div
          className="cert-card"
          key={index}
          data-reveal
          style={{ "--d": `${index * 100}ms` }}
        >
          <div className="cert-image">
            <img src={item.image} alt={item.title} />
          </div>

          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}