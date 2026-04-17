import { useMemo, useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import heroMedicine from "../assets/hero-medicine.png";
import background2 from "../assets/Background2.png";
import background1 from "../assets/background.png";
import CertificationShowcase from "../components/CertificationShowcase";
import { CERTIFICATIONS } from "../data/certifications";
import {
  FaShieldAlt,
  FaFlask,
  FaUserMd,
  FaTruck,
  FaGlobeAsia,
  FaRegCheckCircle,
  FaMapMarkerAlt,
  FaCapsules,
} from "react-icons/fa";

export default function Home() {
  const words = useMemo(() => ["Health", "Care", "Happiness"], []);
  const [index, setIndex] = useState(0);

  const slides = useMemo(
    () => [
      {
        key: "slide-1",
        image: heroMedicine,
        alt: "Pharmaceutical manufacturing and quality environment",
      },
      {
        key: "slide-2",
        image: background2,
        alt: "Healthcare product portfolio and professional packaging",
      },
      {
        key: "slide-3",
        image: background1,
        alt: "Pharmaceutical solutions for clinical outcomes",
      },
    ],
    []
  );

  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(id);
  }, [words.length]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return undefined;

    intervalRef.current = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return undefined;

    const elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-fade" />
        <div className="hero-carousel" aria-hidden="true">
          {slides.map((s, i) => (
            <div
              key={s.key}
              className={`hero-slide${i === activeSlide ? " is-active" : ""}`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
          ))}
          <div className="hero-overlay" />
          <div className="hero-grid" />
        </div>

        <div className="hero-inner container">
          <div className="hero-left">
            <p className="hero-eyebrow" data-reveal style={{ "--d": "0ms" }}>
              LENTRIX LIFESCIENCES
            </p>

            <h1 id="hero-heading" data-reveal style={{ "--d": "80ms" }}>
              Trusted formulations. Built for healthcare outcomes.
            </h1>

            <p className="hero-subtext" data-reveal style={{ "--d": "140ms" }}>
              LENTRIX PHARMACEUTICAL develops and markets quality-focused
              formulations through world-class manufacturing partners—serving
              prescribers, distributors, and patients with consistency and
              integrity.
            </p>

            <div className="hero-buttons" data-reveal style={{ "--d": "220ms" }}>
              <Link to="/products" className="btn-primary no-underline">
                Explore products
              </Link>
              <Link to="/contact" className="btn-outline no-underline">
                Partner with us
              </Link>
            </div>

            <div className="hero-micro" data-reveal style={{ "--d": "300ms" }}>
              <span className="hero-micro-label">Bringing</span>
              <span className="hero-micro-word">{words[index]}</span>
              <span className="hero-micro-label">to life</span>
            </div>
          </div>

          <div className="hero-right" data-reveal style={{ "--d": "180ms" }}>
            <aside className="identity-panel" aria-label="Company identity">
              <div className="identity-top">
                <p className="identity-title">LENTRIX LIFESCIENCES</p>
                <p className="identity-sub">
                  A quality-led pharmaceutical company focused on dependable
                  formulations and disciplined execution across markets.
                </p>
              </div>

              <div className="identity-rule" aria-hidden="true" />

              <ul className="identity-points">
                <li>
                  <FaShieldAlt aria-hidden />
                  Compliance-led quality mindset
                </li>
                <li>
                  <FaUserMd aria-hidden />
                  Doctor-first scientific engagement
                </li>
                <li>
                  <FaTruck aria-hidden />
                  Reliable, responsive distribution
                </li>
              </ul>
            </aside>
          </div>
          
        </div>
      </section>

      <section className="why section" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="why-heading">Why choose LENTRIX?</h2>
            <p className="section-lead">
              A partner built for prescribers, distributors, and patients who
              expect consistency and integrity.
            </p>
          </div>
          <div className="why-grid">
            <article className="why-card" data-reveal style={{ "--d": "0ms" }}>
              <div className="why-card-head">
                <div className="why-icon" aria-hidden>
                  <FaShieldAlt />
                </div>
                <span className="why-tag">Quality systems</span>
              </div>
              <h3>Premium quality</h3>
              <p>
                Products manufactured at WHO-GMP certified facilities with
                rigorous oversight.
              </p>
              <div className="why-foot">
                <FaRegCheckCircle aria-hidden /> Trusted production controls
              </div>
            </article>

            <article className="why-card" data-reveal style={{ "--d": "80ms" }}>
              <div className="why-card-head">
                <div className="why-icon" aria-hidden>
                  <FaUserMd />
                </div>
                <span className="why-tag">Medical engagement</span>
              </div>
              <h3>Doctor-trusted</h3>
              <p>
                Strong medical marketing network across specialties and
                evidence-led engagement.
              </p>
              <div className="why-foot">
                <FaRegCheckCircle aria-hidden /> Relationship-led field force
              </div>
            </article>

            <article className="why-card" data-reveal style={{ "--d": "140ms" }}>
              <div className="why-card-head">
                <div className="why-icon" aria-hidden>
                  <FaFlask />
                </div>
                <span className="why-tag">Portfolio depth</span>
              </div>
              <h3>Wide product range</h3>
              <p>
                Tablets, syrups, capsules, injectables, and nutraceuticals to
                address diverse therapy needs.
              </p>
              <div className="why-foot">
                <FaRegCheckCircle aria-hidden /> Multi-therapy solutions
              </div>
            </article>

            <article className="why-card" data-reveal style={{ "--d": "220ms" }}>
              <div className="why-card-head">
                <div className="why-icon" aria-hidden>
                  <FaTruck />
                </div>
                <span className="why-tag">Supply reliability</span>
              </div>
              <h3>Fast distribution</h3>
              <p>
                Reliable supply chain design focused on timely delivery and
                forecast accuracy.
              </p>
              <div className="why-foot">
                <FaRegCheckCircle aria-hidden /> Regional service continuity
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="certifications section"
        aria-labelledby="cert-heading"
      >
        <div className="container">
          <div className="section-head section-head--center" data-reveal>
            <h2 id="cert-heading">Compliance &amp; quality assurance</h2>
            <p className="section-lead">
              Our operations and partnerships are structured around global
              benchmarks - so stakeholders see LENTRIX as a dependable,
              audit-ready pharmaceutical enterprise.
            </p>
          </div>
          <CertificationShowcase items={CERTIFICATIONS} />
        </div>
      </section>

      <section className="global section" aria-labelledby="global-heading">
        <div className="container global-inner">
          <div className="global-copy" data-reveal>
            <h2 id="global-heading">Global presence &amp; export vision</h2>
            <p className="section-lead">
              We are building a future-ready distribution footprint—designed for
              compliance, traceability, and consistent product availability as we
              expand to new markets.
            </p>

            <ul className="global-points" data-reveal>
              <li>
                <FaGlobeAsia aria-hidden /> Market expansion roadmap
              </li>
              <li>
                <FaShieldAlt aria-hidden /> Compliance-first operations
              </li>
              <li>
                <FaTruck aria-hidden /> Scalable supply reliability
              </li>
            </ul>

            <div className="global-actions" data-reveal>
              <Link to="/distributors" className="btn-outline no-underline">
                View network
              </Link>
              <Link to="/contact" className="btn-primary no-underline">
                Discuss partnership
              </Link>
            </div>
          </div>

          <div className="global-visual" aria-hidden="true" data-reveal>
            <svg
              className="world-map"
              viewBox="0 0 980 460"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="ocean" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#f8fbff" />
                  <stop offset="1" stopColor="#eef6fd" />
                </linearGradient>
                <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#d7e8f7" />
                  <stop offset="1" stopColor="#c8def3" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="980" height="460" fill="url(#ocean)" />

              <g opacity="0.16" stroke="#0f2744" strokeWidth="1">
                <path d="M90 110h800" />
                <path d="M90 200h800" />
                <path d="M90 290h800" />
                <path d="M90 380h800" />
                <path d="M170 70v330" />
                <path d="M320 70v330" />
                <path d="M470 70v330" />
                <path d="M620 70v330" />
                <path d="M770 70v330" />
              </g>

              <g fill="url(#land)" stroke="rgba(15,39,68,0.12)" strokeWidth="1.2">
                <path d="M104 117c37-31 76-52 120-62 55-12 128-7 177 16 34 16 58 38 64 63 6 28-10 54-43 68-26 12-58 16-91 16-26 0-44 8-58 21-22 21-46 33-76 33-35 1-67-14-90-37-27-28-37-56-31-82 5-22 16-30 28-36z" />
                <path d="M290 258c17-11 37-13 56-7 27 9 42 30 39 56-3 28-18 53-40 74-16 15-33 20-52 14-20-7-33-24-36-48-5-34 4-66 33-89z" />
                <path d="M492 134c24-20 47-29 75-30 33-1 63 11 78 30 10 13 8 29-7 42-15 13-35 19-56 18-18-1-37 5-50 15-18 12-35 16-52 11-15-4-24-16-26-33-2-22 10-40 38-53z" />
                <path d="M517 191c31-21 63-27 93-18 31 9 51 30 58 60 8 32 0 63-23 89-23 26-51 39-83 39-30 1-57-9-75-30-19-21-27-49-22-78 5-27 20-50 52-62z" />
                <path d="M595 112c42-31 86-45 130-45 56 0 117 26 150 69 22 30 27 61 13 91-15 33-51 56-92 61-35 4-64 17-86 38-24 22-59 34-95 32-35-2-65-16-86-42-20-24-29-54-24-84 5-34 30-67 90-120z" />
                <path d="M792 308c18-12 40-17 61-14 20 2 36 14 42 31 7 19 2 35-16 50-17 14-38 21-60 21-20 0-37-7-49-21-12-14-16-31-10-48 4-9 15-14 32-19z" />
              </g>

              <path id="route-na" d="M620 216 C 530 165, 410 148, 282 170" />
              <path id="route-eu" d="M620 216 C 586 172, 550 157, 518 156" />
              <path id="route-af" d="M620 216 C 582 235, 553 257, 537 295" />
              <path id="route-me" d="M620 216 C 656 208, 701 203, 746 208" />
              <path id="route-ap" d="M620 216 C 695 234, 759 260, 824 326" />
            </svg>

            <svg
              className="map-lines"
              viewBox="0 0 980 460"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="export-path p1"
                d="M620 216 C 530 165, 410 148, 282 170"
                fill="none"
                stroke="rgba(3,105,161,0.52)"
                strokeWidth="2.2"
                strokeDasharray="8 8"
              />
              <path
                className="export-path p2"
                d="M620 216 C 586 172, 550 157, 518 156"
                fill="none"
                stroke="rgba(14,116,144,0.48)"
                strokeWidth="2.2"
                strokeDasharray="8 8"
              />
              <path
                className="export-path p3"
                d="M620 216 C 582 235, 553 257, 537 295"
                fill="none"
                stroke="rgba(3,105,161,0.45)"
                strokeWidth="2.2"
                strokeDasharray="8 8"
              />
              <path
                className="export-path p4"
                d="M620 216 C 656 208, 701 203, 746 208"
                fill="none"
                stroke="rgba(15,39,68,0.35)"
                strokeWidth="2.2"
                strokeDasharray="8 8"
              />
              <path
                className="export-path p5"
                d="M620 216 C 695 234, 759 260, 824 326"
                fill="none"
                stroke="rgba(3,105,161,0.42)"
                strokeWidth="2.2"
                strokeDasharray="8 8"
              />
            </svg>

            <div className="map-marker india">
              <FaMapMarkerAlt />
              <span>India Hub</span>
            </div>
            <div className="map-marker north-america" />
            <div className="map-marker europe" />
            <div className="map-marker africa" />
            <div className="map-marker sea" />
            <div className="map-marker oceania" />

            <div className="map-medic map-medic-1">
              <FaCapsules />
            </div>
            <div className="map-medic map-medic-2">
              <FaCapsules />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="solutions section" aria-labelledby="highlight-heading">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="highlight-heading">Featured formulations</h2>
            <p className="section-lead">
              Representative portfolio highlights—discover the full range on
              our products page.
            </p>
          </div>
          <div className="solutions-layout">
            <article className="solution-feature" data-reveal style={{ "--d": "0ms" }}>
              <div className="solution-copy">
                <p className="solution-label">Cardiovascular</p>
                <h3 className="solution-title">AMLEN-5</h3>
                <p className="solution-desc">Amlodipine 5mg tablets</p>
                <p className="solution-note">
                  Developed for consistency, patient adherence, and dependable
                  supply—supported by disciplined quality practices across the
                  value chain.
                </p>
                <div className="solution-actions">
                  <Link to="/products" className="btn-primary no-underline">
                    View full portfolio
                  </Link>
                  <Link to="/contact" className="btn-outline no-underline">
                    Enquire
                  </Link>
                </div>
              </div>
              <div className="solution-media" aria-hidden="true">
                <img src={amlenImg} alt="AMLEN-5 packaging" />
              </div>
            </article>

            <div className="solution-secondary">
              <article className="solution-brief" data-reveal style={{ "--d": "90ms" }}>
                <div className="solution-brief-top">
                  <p className="solution-label">Respiratory</p>
                  <h4 className="solution-brief-title">COFLEN</h4>
                  <p className="solution-desc">Cough relief syrup</p>
                </div>
                <div className="solution-brief-media" aria-hidden="true">
                  <img src={xyzImg} alt="COFLEN packaging" />
                </div>
                <Link to="/products" className="solution-brief-link">
                  Explore portfolio →
                </Link>
              </article>

              <article className="solution-brief" data-reveal style={{ "--d": "180ms" }}>
                <div className="solution-brief-top">
                  <p className="solution-label">Gastro</p>
                  <h4 className="solution-brief-title">P-LEN-D</h4>
                  <p className="solution-desc">Pantoprazole + domperidone</p>
                </div>
                <div className="solution-brief-media" aria-hidden="true">
                  <img src={pantaylenImg} alt="P-LEN-D packaging" />
                </div>
                <Link to="/products" className="solution-brief-link">
                  Explore portfolio →
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section> */}

      <section className="cta section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-panel" data-reveal>
            <div className="cta-copy">
              <h2 id="cta-heading">Partner with LENTRIX</h2>
              <p>
                Join our growing network of distributors and healthcare
                providers. Tell us your territory, capabilities, and goals—our
                team will respond with a clear next step.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn-primary large no-underline">
                  Become a distributor
                </Link>
                <Link
                  to="/distributors"
                  className="btn-outline large no-underline"
                >
                  Distribution network
                </Link>
              </div>
            </div>
            <div className="cta-aside" aria-hidden="true">
              <div className="cta-aside-card">
                <p className="cta-aside-title">What you can expect</p>
                <ul className="cta-aside-list">
                  <li>Fast response from the LENTRIX team</li>
                  <li>Clear onboarding and territory alignment</li>
                  <li>Portfolio support and continuity of supply</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
