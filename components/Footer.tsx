import Link from "next/link";
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
      <div className="mx-auto grid max-w-screen-2xl gap-10 px-6 md:grid-cols-12">

        {/* Company */}
<div className="md:col-span-3">
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
<div className="md:col-span-2">
          <h4 className="mb-4 text-xl font-semibold">
            Quick Links
          </h4>

          <ul className="space-y-2 text-gray-400">
  <li>
    <Link href="/" className="transition hover:text-green-500">
      Home
    </Link>
  </li>

  <li>
    <Link href="/about" className="transition hover:text-green-500">
      About
    </Link>
  </li>

  <li>
    <Link href="/services" className="transition hover:text-green-500">
      Services
    </Link>
  </li>

  <li>
    <Link href="/contact" className="transition hover:text-green-500">
      Contact
    </Link>
  </li>
</ul>
        </div>

        {/* Our Services */}
<div className="md:col-span-3">
          <h4 className="mb-4 text-xl font-semibold">
            Our Services
          </h4>

          <ul className="space-y-2 text-gray-400">
  <li>Integrated Facilities Management</li>
  <li>Cleaning Services</li>
  <li>Property Management</li>
  <li>Security Services</li>
  <li>Property Consultancy</li>
</ul>
        </div>

        {/* Contact */}
<div className="md:col-span-4">
  <h4 className="mb-4 text-xl font-semibold">
    Contact
  </h4>

  <div className="space-y-3 text-gray-400">

    <div className="flex items-start gap-3">
  <FaMapMarkerAlt className="mt-1 text-green-500 flex-shrink-0" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
    <div>
      <p className="font-semibold text-white">Ghana Headquarters</p>
      <p>
        LB8 Calcite Close, GA-208-1143<br />
        Tesano, Accra
      </p>
    </div>

    <div>
      <p className="font-semibold text-white">United Kingdom Headquarters</p>
      <p>
        165 Hornbeams<br />
        Harlow, Essex CM20 1PJ
      </p>
    </div>
  </div>


</div>

    <div className="flex flex-col gap-2">
  <div className="flex items-center gap-3">
    <FaPhoneAlt className="text-green-500" />
    <a
      href="tel:+233244029773"
      className="hover:text-green-500"
    >
     Ghana: +233 24 402 9773
    </a>
  </div>

  <div className="flex items-center gap-3">
    <FaPhoneAlt className="text-green-500" />
    <a
      href="tel:+447846260046"
      className="hover:text-green-500"
    >
      UK: +44 7846 260046
    </a>
  </div>

    </div>

    <div className="flex items-center gap-3">
      <FaEnvelope className="text-green-500" />
      <a
        href="mailto:info@netfacilitiesmanagement.com?subject=Website%20Enquiry&body=Hello%20NET%20Facilities%20Team,%0A%0AI'm%20interested%20in%20your%20services.%20Please%20contact%20me.%0A%0AThank%20you."
        className="hover:text-green-500"
      >
        info@netfacilitiesmanagement.com
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
        © {new Date().getFullYear()} NET Facilities & Properties Management Ltd. All rights reserved.
      </div>
    </footer>
  );
}