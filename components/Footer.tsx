import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">

        {/* Company */}
        <div>
          <Image
  src="/logo.png"
  alt="NET Facilities Logo"
  width={180}
  height={60}
  className="mb-4 h-auto w-40"
/>

          <p className="text-gray-400">
            Managing Properties. Delivering Excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-xl font-semibold">
            Quick Links
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="transition hover:text-green-500">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="transition hover:text-green-500">
                Services
              </a>
            </li>

            <li>
              <a href="#about" className="transition hover:text-green-500">
                About
              </a>
            </li>

            <li>
              <a href="#gallery" className="transition hover:text-green-500">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="transition hover:text-green-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="mb-4 text-xl font-semibold">
            Our Services
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>Cleaning Services</li>
            <li>Facilities Management</li>
            <li>Property Maintenance</li>
            <li>Property Consultancy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
  <h4 className="mb-4 text-xl font-semibold">
    Contact
  </h4>

  <div className="space-y-4 text-gray-400">

    <div className="flex items-start gap-3">
      <FaMapMarkerAlt className="mt-1 text-green-500" />
      <span>
        LB8 Calcite Close<br />
        GA-208-1143<br />
        Tesano, Accra
      </span>
    </div>

    <div className="flex items-center gap-3">
      <FaPhoneAlt className="text-green-500" />
      <a
        href="tel:+233244029773"
        className="hover:text-green-500"
      >
        +233 24 402 9773
      </a>
    </div>

    <div className="flex items-center gap-3">
      <FaEnvelope className="text-green-500" />
      <a
        href="mailto:netfacilities26@gmail.com"
        className="hover:text-green-500"
      >
        netfacilities26@gmail.com
      </a>
    </div>

    <div className="flex items-center gap-3">
      <FaWhatsapp className="text-green-500" />
      <a
        href="https://wa.me/233244029773"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-500"
      >
        Chat on WhatsApp
      </a>
    </div>

  </div>
</div>

      </div>

      <div className="mt-10 border-t border-slate-700 pt-6 text-center text-gray-500">
        © 2026 NET Facilities & Properties Management Ltd. All rights reserved.
      </div>
    </footer>
  );
}