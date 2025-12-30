import { useState } from "react";
import emailjs from "emailjs-com";
import "./career.css";

export default function Career() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      setStatus("Application Sent Successfully! 🎉");
      e.target.reset();
    })
    .catch(() => {
      setStatus("Failed to send. Please try again.");
    });
  };

  return (
    <div className="career-page">
      <h1 className="career-title">Join Our Team</h1>
      <p className="career-subtitle">
        Build your career with AYLEN and be a part of transforming healthcare.
      </p>

      <form className="career-form" onSubmit={sendEmail}>
        
        <input name="name" type="text" placeholder="Your Full Name" required />
        <input name="email" type="email" placeholder="Email Address" required />
        <input name="phone" type="text" placeholder="Phone Number" required />

        <select name="position" required>
          <option value="">Select Position</option>
          <option value="Medical Representative">Medical Representative</option>
          <option value="Marketing Associate">Marketing Associate</option>
          <option value="Distribution Manager">Distribution Manager</option>
          <option value="Office Executive">Office Executive</option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about yourself..."
          rows="4"
        ></textarea>

        <button className="career-btn" type="submit">Submit Application</button>
      </form>

      {status && <p className="career-status">{status}</p>}
    </div>
  );
}
