import { useMemo, useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import heroMedicine from "../assets/hero-medicine.png";
import mikalenHero from "../assets/MIKALEN.jpg";
import zomylinHero from "../assets/ZOMYLIN-Q.jpg";
import amlenImg from "../assets/AMLEN-5.png";
import xyzImg from "../assets/COFLEN-DX.png";
import pantaylenImg from "../assets/P-LEN-DSR.png";
import certWho from "../assets/cert-who.png";
import certFda from "../assets/cert-fda.png";
import certGlp from "../assets/cert-glp.png";
import certGmp from "../assets/cert-gmp.png";
import certIso from "../assets/cert-iso.png";
import {
  FaShieldAlt,
  FaFlask,
  FaUserMd,
  FaTruck,
  FaGlobeAsia,
} from "react-icons/fa";

const CERTIFICATIONS = [
  {
    key: "who",
    title: "WHO",
    subtitle: "Certified facilities",
    blurb: "Manufacturing aligned with international quality benchmarks.",
    badge: certWho,
  },
  {
    key: "fda",
    title: "FDA",
    subtitle: "Approved standards",
    blurb: "Processes designed to meet stringent regulatory expectations.",
    badge: certFda,
  },
  {
    key: "glp",
    title: "GLP",
    subtitle: "Laboratory compliance",
    blurb: "Good Laboratory Practice for reliable development and testing.",
    badge: certGlp,
  },
  {
    key: "gmp",
    title: "GMP",
    subtitle: "Manufacturing excellence",
    blurb: "Good Manufacturing Practice across partner production sites.",
    badge: certGmp,
  },
  {
    key: "iso",
    title: "ISO",
    subtitle: "Management systems",
    blurb: "Structured quality and operational discipline at scale.",
    badge: certIso,
  },
];

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
        image: mikalenHero,
        alt: "Healthcare product portfolio and professional packaging",
      },
      {
        key: "slide-3",
        image: zomylinHero,
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
    }, 1500);
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
    }, 6500);

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
                <p className="identity-kicker">LENTRIX LIFESCIENCES</p>
                <p className="identity-title">LENTRIX PHARMACEUTICAL</p>
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
              <div className="why-icon" aria-hidden>
                <FaShieldAlt />
              </div>
              <h3>Premium quality</h3>
              <p>
                Products manufactured at WHO-GMP certified facilities with
                rigorous oversight.
              </p>
            </article>

            <article className="why-card" data-reveal style={{ "--d": "80ms" }}>
              <div className="why-icon" aria-hidden>
                <FaUserMd />
              </div>
              <h3>Doctor-trusted</h3>
              <p>
                Strong medical marketing network across specialties and
                evidence-led engagement.
              </p>
            </article>

            <article className="why-card" data-reveal style={{ "--d": "140ms" }}>
              <div className="why-icon" aria-hidden>
                <FaFlask />
              </div>
              <h3>Wide product range</h3>
              <p>
                Tablets, syrups, capsules, injectables, and nutraceuticals to
                address diverse therapy needs.
              </p>
            </article>

            <article className="why-card" data-reveal style={{ "--d": "220ms" }}>
              <div className="why-icon" aria-hidden>
                <FaTruck />
              </div>
              <h3>Fast distribution</h3>
              <p>
                Reliable supply chain design focused on timely delivery and
                forecast accuracy.
              </p>
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
          <ul className="cert-rail" aria-label="Certifications">
            {CERTIFICATIONS.map((c) => (
              <li
                key={c.key}
                className="cert-tile"
                data-reveal
                style={{ "--d": "0ms" }}
              >
                <div className="cert-badge">
                  <img src={c.badge} alt={`${c.title} ${c.subtitle}`} />
                </div>
                <div className="cert-meta">
                  <p className="cert-title">{c.title}</p>
                  <p className="cert-sub">{c.subtitle}</p>
                </div>
                <p className="cert-blurb">{c.blurb}</p>
              </li>
            ))}
          </ul>
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
              viewBox="0 0 900 420"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="mapBg" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#0f2744" stopOpacity="0.10" />
                  <stop offset="1" stopColor="#0369a1" stopOpacity="0.06" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="900" height="420" fill="url(#mapBg)" />

              {/* Subtle lat/long grid */}
              <g opacity="0.18" stroke="rgba(15,39,68,0.20)" strokeWidth="1">
                <path d="M60 105h780" />
                <path d="M60 210h780" />
                <path d="M60 315h780" />
                <path d="M180 60v300" />
                <path d="M360 60v300" />
                <path d="M540 60v300" />
                <path d="M720 60v300" />
              </g>

              {/* Stylized continents (clean, enterprise map silhouette) */}
              <g fill="rgba(15, 39, 68, 0.14)">
                {/* North America */}
                <path d="M120 120c40-40 92-58 156-54 44 2 84 18 116 46 16 14 26 28 30 42 6 20-2 40-24 58-18 14-40 22-66 24-30 2-54 12-72 30-14 14-32 22-54 24-24 2-48-4-70-18-22-14-36-34-42-58-6-24 2-46 26-64 18-14 34-26 44-34z" />
                {/* South America */}
                <path d="M260 250c18-12 38-16 60-12 16 2 30 10 40 24 12 16 14 34 6 54-10 26-26 46-48 60-16 10-32 10-46 0-14-10-22-26-24-48-2-32 2-58 12-78z" />
                {/* Europe */}
                <path d="M470 120c18-14 38-20 60-18 18 2 32 10 42 22 10 12 10 24 0 36-10 12-26 18-48 18-14 0-28 4-40 12-14 10-28 12-42 8-14-4-22-14-24-28-2-18 8-34 28-50z" />
                {/* Africa */}
                <path d="M500 190c22-16 46-22 72-18 24 4 42 18 54 40 10 18 10 38 0 60-10 22-26 40-48 54-18 12-38 16-60 12-22-4-38-16-48-36-10-18-12-38-6-58 6-22 18-40 36-54z" />
                {/* Asia */}
                <path d="M560 120c28-22 60-34 96-36 40-2 78 10 114 36 26 18 42 40 48 66 6 28-2 52-24 72-18 16-40 24-66 24-22 0-42 6-60 18-22 16-46 24-72 24-24 0-46-8-66-24-18-14-30-32-36-54-6-24 0-46 18-66 16-18 32-34 48-44z" />
                {/* Australia */}
                <path d="M740 300c18-12 38-16 58-12 18 4 30 14 36 30 6 16 2 30-12 42-14 12-30 18-48 18-16 0-30-6-42-18-12-12-18-26-16-42 2-10 10-18 24-18z" />
              </g>
              <g fill="rgba(3, 105, 161, 0.10)">
                <path d="M410 170c16-10 32-14 48-12 14 2 22 10 24 22 2 14-4 24-18 30-12 6-26 10-42 10-12 0-20-4-24-12-6-10-2-22 12-38z" />
              </g>
            </svg>

            <div className="map-marker m1" />
            <div className="map-marker m2" />
            <div className="map-marker m3" />
            <div className="map-marker m4" />

            <svg
              className="map-lines"
              viewBox="0 0 900 420"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="export-path p1"
                d="M250 220 C 340 170, 430 165, 520 205"
                fill="none"
                stroke="rgba(3,105,161,0.26)"
                strokeWidth="2"
                strokeDasharray="6 10"
              />
              <path
                className="export-path p2"
                d="M520 205 C 600 235, 660 250, 745 232"
                fill="none"
                stroke="rgba(15,39,68,0.20)"
                strokeWidth="2"
                strokeDasharray="6 10"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="solutions section" aria-labelledby="highlight-heading">
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
      </section>

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
