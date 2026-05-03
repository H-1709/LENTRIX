









import "./About.css";
import CertificationShowcase from "../components/CertificationShowcase";
import { CERTIFICATIONS } from "../data/certifications";
import ownerPhoto from "../assets/Owner.png";

export default function About() {
  return (
    <div className="about-page">

      {/* ---------------- WHO WE ARE SECTION ---------------- */}
      <section className="who">
        <h1 className="main-heading">
          Who We Are
          <span className="underline"></span>
        </h1>

        <p className="sub-heading">
          Driven By Science, Inspired By Life
        </p>

        <div className="who-text">
          <p>
            <strong>LENTRIX LIFESCIENCES</strong> is one of the fastest growing pharmaceutical
            company in India. Our branded generics business in India commands
            a strong position in <strong>high-growth chronic therapies</strong> and <strong>strong positioning</strong> in
            the acute segment. Over the past decade, we have been developing and
            manufacturing affordable medicines for patients.
          </p>

          <p>
            Our innovation-led drug discovery processes ensure the health and well-being of people. 
            Our enhanced investment in innovation and a strong track record in research and development 
            have produced medical miracles that have changed lives and made a profound impact on real life.
          </p>

          <p>
            Being a care-focused, research-driven company, we are committed to complying with the 
            highest ethical standards in clinical research and medical practice. We want to be 
            valued not only for our pharmaceutical products but also for the way we conduct our 
            research and business activities.
          </p>
        </div>
      </section>

      {/* ---------------- OWNER INFO SECTION ---------------- */}
      <section className="split-section">
        <div className="owner-profile">
          <div className="owner-photo-wrap">
            <img src={ownerPhoto} alt="Ashish Rajyaguru - Owner" className="owner-photo" />
          </div>
        </div>

        <div className="split-text">
          <p>
            <strong>LENTRIX</strong> is a leading pharmaceutical company based out of Ahmedabad 
            which focuses on improving patient lives by identifying, developing, and commercializing 
            innovative products that address diverse medical needs.
          </p>
          
          <p>
            <strong>LENTRIX LIFESCIENCES</strong> was founded by <strong>Mr. Ashish Rajyaguru</strong>, 
            who is equipped with over <strong>15 years of proficiency</strong> in the pharmaceutical industry 
            and expertise in leading functions right from research, manufacturing of formulations, 
            Quality, and business development to Sales and marketing functions.
          </p>
        </div>
      </section>

      {/* ---------------- UPDATED CARD SECTION ---------------- */}
      <section className="icon-section">
        {/* Vision */}
        <div className="icon-box">
          <div className="icon-circle">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3>Our Vision</h3>
          <p>
            To be one of the most admired pharmaceutical companies in India.
            We aspire to enrich our people - the driving force behind LENTRIX -
            empowering them to achieve the highest standards of professional excellence.
          </p>
        </div>

        {/* Mission */}
        <div className="icon-box">
          <div className="icon-circle">
            <i className="fas fa-heartbeat"></i>
          </div>
          <h3>Our Mission</h3>
          <p>
            To provide total customer satisfaction and become market leaders through
            excellence in technology, service, and product quality.
          </p>
          <p className="mission-tagline">
            "Happiness to life by providing better health care solutions."
          </p>
        </div>

        {/* Strengths */}
        <div className="icon-box">
          <div className="icon-circle">
            <i className="fas fa-star"></i>
          </div>
          <h3>Our Strengths</h3>
          <ul className="strength-list">
            <li>Affordable formulations</li>
            <li>Quality-focused product basket</li>
            <li>Team of committed professionals</li>
          </ul>
        </div>
      </section>

      {/* ---------------- CERTIFICATIONS SECTION ---------------- */}
      <section className="about-certifications">
        <div className="about-cert-head">
          <h2 className="animated-title">
            Compliance &amp; Quality Framework
            <span className="underline"></span>
          </h2>
        </div>
        <div className="about-cert-wrap">
          {/* Ensure CERTIFICATIONS array is not empty in your data file */}
          <CertificationShowcase items={CERTIFICATIONS} variant="about" />
        </div>
      </section>

    </div>
  );
}