import "./About.css";

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
          Committed to Health. Driven by Innovation.
        </p>

        <div className="who-text">
          <p>
            <strong>AYLEN</strong> is a pharmaceutical company focused on delivering affordable
            healthcare to society. Our products are formulated based on three major
            parameters — <strong>Quality, Innovation,</strong> and <strong>Affordability.</strong>
          </p>

          <p>
            We are engaged in the mission of spreading good health and happiness by
            offering reliable and affordable pharmaceutical formulations. Every
            product reflects our dedication to strengthening healthcare outcomes.
          </p>

          <p>
            AYLEN is led by a team of seasoned professionals with deep expertise in
            the healthcare domain. Our team works with a unidirectional and
            patient-first approach, constantly striving to enhance lifestyle and
            well-being.
          </p>

          <p>
            At AYLEN, <strong>people remain at the heart of our growth vision.</strong> Our
            commitment to healthcare excellence drives every step we take.
          </p>
        </div>
      </section>

      {/* ---------------- SPLIT SCREEN SECTION ---------------- */}
      <section className="split-section">
        <div className="split-text">
          <h2 className="animated-title">
            Our Commitment to Excellence
            <span className="underline"></span>
          </h2>

          <p>
            At AYLEN, we believe that good health is the foundation of a strong and
            happy life. Our vision and mission revolve around creating high-quality,
            accessible medicines for everyone.
          </p>
        </div>

        {/* <div className="split-image">
          <img src="/src/assets/about-lab.jpg" alt="AYLEN Laboratory" />
        </div> */}
      </section>

      {/* ---------------- ICON BLOCKS SECTION ---------------- */}
      <section className="icon-section">

        {/* Vision */}
        <div className="icon-box">
          <div className="icon-circle">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3>Our Vision</h3>
          <p>
            To be one of the most admired pharmaceutical companies in India.
            We aspire to enrich our people — the driving force behind AYLEN —
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
            Mission Statement: “Happiness to life by providing better health care solutions.”
          </p>
        </div>

        {/* Strengths */}
        <div className="icon-box">
          <div className="icon-circle">
            <i className="fas fa-star"></i>
          </div>
          <h3>Our Strengths</h3>
          <ul>
            <li>Affordable formulations</li>
            <li>Quality-focused product basket</li>
            <li>Team of committed professionals</li>
          </ul>
        </div>

      </section>

    </div>
  );
}
