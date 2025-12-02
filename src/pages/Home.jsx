import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import amlenImg from "../assets/AMLEN-5.png";
import xyzImg from "../assets/COFLEN-DX.png";
import pantaylenImg from "../assets/P-LEN-DSR.png";


export default function Home() {
    const words = ["Health", "Care", "Happiness"];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 1500); // change word every 2 seconds

        return () => clearInterval(id);
    }, []);

    return (
        <div className="home">

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-left">
                    <h1>
                        Innovating Healthcare with Trusted Medicines
                    </h1>
                    <p className="tagline">
                        Bringing <span className="dynamic-word">{words[index]}</span> to life.
                    </p>

                    <p className="sub-tagline">
                        <span className="tagline-small">“HAPPIENESS TO LIFE”</span>
                    </p>

                    <p className="hero-subtext">
                        AYLEN Pharmaceuticals delivers high-quality, trusted medicines
                        through world-class manufacturing partners and a strong doctor-first approach.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/products" className="btn-primary no-underline">Explore Products</Link>
                        <Link to="/contact" className="btn-outline no-underline">Contact Us</Link>
                    </div>

                </div>

                <div className="hero-right">
                    <img src="" alt="" />

                </div>
            </section>

            {/* WHY AYLEN SECTION */}
            <section className="why">
                <h2>Why Choose AYLEN?</h2>

                <div className="why-boxes">
                    <div className="why-card">
                        <h3>Premium Quality</h3>
                        <p>Products manufactured at WHO-GMP certified facilities.</p>
                    </div>

                    <div className="why-card">
                        <h3>Doctor-Trusted</h3>
                        <p>Strong medical marketing network across specialties.</p>
                    </div>

                    <div className="why-card">
                        <h3>Wide Product Range</h3>
                        <p>Tablets, syrups, capsules, injectables & nutraceuticals.</p>
                    </div>

                    <div className="why-card">
                        <h3>Fast Distribution</h3>
                        <p>Reliable supply ensuring timely delivery.</p>
                    </div>
                </div>
            </section>


            {/* PRODUCT HIGHLIGHT */}
            <section className="highlight">
                <h2>Our Best-Selling Medicines</h2>

                <div className="highlight-row">

                    <div className="highlight-card">
                        <img src={amlenImg} className="h-img" alt="AMLEN 5" />
                        <h4>AMLEN-5</h4>
                        <p>Amlodipine 5mg Tablets</p>
                    </div>

                    <div className="highlight-card">
                        <img src={xyzImg} className="h-img" alt="XYZ Expectorant" />
                        <h4>COFLEN</h4>
                        <p>Cough Relief Syrup</p>
                    </div>

                    <div className="highlight-card">
                        <img src={pantaylenImg} className="h-img" alt="Pantaylen D" />
                        <h4>P-LEN-D</h4>
                        <p>Pantoprazole + Domperidone</p>
                    </div>

                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta">
                <h2>Want to Partner With AYLEN?</h2>
                <p>Join our growing network of distributors & healthcare providers.</p>
                <Link to="/contact" className="btn-primary large">
                    Become a Distributor
                </Link>

            </section>

        </div>
    );
}
