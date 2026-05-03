import { useMemo, useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import heroMedicine from "../assets/hero-medicine.jpg";
import background2 from "../assets/Background2.png";
import background1 from "../assets/background.png";
// import globalMedicineMap from "../assets/global-medicine-map.svg";
import CertificationShowcase from "../components/CertificationShowcase";
import { CERTIFICATIONS } from "../data/certifications";
import {
  FaShieldAlt,
  FaFlask,
  FaUserMd,
  FaTruck,
  FaGlobeAsia,
  FaRegCheckCircle,
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


  useEffect(() => {
    const nodes = document.querySelectorAll(".vision-node");
    if (!nodes.length) return undefined;

    const handlers = new Map();

    nodes.forEach((node) => {
      const onEnter = () => node.classList.add("is-node-active");
      const onLeave = () => node.classList.remove("is-node-active");
      handlers.set(node, { onEnter, onLeave });
      node.addEventListener("mouseenter", onEnter);
      node.addEventListener("mouseleave", onLeave);
      node.addEventListener("focus", onEnter);
      node.addEventListener("blur", onLeave);
    });

    return () => {
      nodes.forEach((node) => {
        const pair = handlers.get(node);
        if (!pair) return;
        node.removeEventListener("mouseenter", pair.onEnter);
        node.removeEventListener("mouseleave", pair.onLeave);
        node.removeEventListener("focus", pair.onEnter);
        node.removeEventListener("blur", pair.onLeave);
      });
    };
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
              LENTRIX LIFESCIENCES develops and markets quality-focused
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
                  A quality-led company focused on dependable
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

          {/* <div className="global-visual" data-reveal>
            <img
              src={globalMedicineMap}
              alt="Illustration of global medicine availability and distribution reach"
              className="global-visual-image"
            />
          </div> */}
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
