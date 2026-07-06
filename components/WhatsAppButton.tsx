import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233244029773?text=Hello%20NET%20Facilities,%20I%20would%20like%20to%20request%20a%20quote."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}