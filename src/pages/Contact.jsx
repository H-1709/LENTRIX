import "./Contact.css";
import { useState } from "react";
import { sendContactForm } from "../lib/emailService";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    location: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await sendContactForm(form);
      setStatus("Distributor request sent successfully! 🎉");
      setForm({
        name: "",
        company: "",
        location: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus(error.message || "Unable to send right now. Please try again later.");
    }
  }

  return (
    <div className="contact-page">
      
      {/* CONTACT US SECTION */}
      <h1>Contact Us</h1>

      {/* Distributor Form Section */}
      <div className="distributor-section">
        <h2>Become a Distributor</h2>
        <p>
          Interested in partnering with Lentrix lifesciences?  
          Fill out the form below and our team will reach out shortly.
        </p>

        <form className="distributor-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="location"
              placeholder="City / State"
              value={form.location}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your distribution background..."
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn-primary submit-btn">
            Submit Request
          </button>
        </form>
        {status && <p className="career-status">{status}</p>}
      </div>
    </div>
  );
}
