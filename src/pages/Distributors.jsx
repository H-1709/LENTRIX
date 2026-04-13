import { useState } from "react";
import "./Distributors.css";
import { distributors } from "../data/distributors";
import { FaLocationArrow,FaPhone,FaEnvelope } from "react-icons/fa";

// import indiaMap from "../assets/india-map.png"; // put your map img here

export default function DistributorsPage() {
  const [openCity, setOpenCity] = useState(null);

  // Group by city
  const grouped = distributors.reduce((acc, d) => {
    if (!acc[d.city]) acc[d.city] = [];
    acc[d.city].push(d);
    return acc;
  }, {});

  const toggleCity = (city) => {
    setOpenCity(openCity === city ? null : city);
  };

  return (
    <div className="map-page">
      <h1>DISTRIBUTION NETWORK</h1>
      {/* MAP SECTION
      <div className="map-container">
        <img src={indiaMap} alt="India Map" className="map-img" />
        <h1 className="map-title">Distribution Network</h1>
      </div> */}

      {/* CITY ACCORDION SECTIONS */}
      <div className="city-sections">
        {Object.keys(grouped).map((city) => (
          <div key={city} className="city-block">

            {/* City Header */}
            <div className="city-header" onClick={() => toggleCity(city)}>
              <h2>{city}</h2>
              <span className="arrow">{openCity === city ? "▲" : "▼"}</span>
            </div>

            {/* Slide-down content */}
            <div
              className={`city-content ${
                openCity === city ? "open" : ""
              }`}
            >
              <div className="cards-list">
                {grouped[city].map((d, i) => (
                  <div
                    key={i}
                    className="dist-card slide-in"
                  >
                    <h3>{d.name}</h3>
                    <p><FaLocationArrow /> {d.city}</p>
                    <p><FaPhone /> {d.phone}</p>
                    <p><FaEnvelope /> {d.email}</p>

                    <div className="card-actions">
                      <a href={`tel:${d.phone}`} className="call-btn">Call</a>
                      <a href={`mailto:${d.email}`} className="email-btn">Email</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
