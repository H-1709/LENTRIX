import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppFloat.css";

const WHATSAPP_NUMBER = "919909516525";
const MESSAGE = encodeURIComponent(
  "Hello Lentrix Lifesciences, I would like to enquire about your products."
);

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span>Chat</span>
    </a>
  );
}
