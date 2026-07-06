"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  setLoading(true);
  setSuccess("");
  setError("");

  emailjs
    .sendForm(
  "service_hsr6bol",
      "template_428esor",
      form.current,
      "hs0dRAXAZpdhfZjc9"
    )
    .then(() => {
      setSuccess("Your request has been sent successfully.");
      form.current?.reset();
    })
    .catch((err) => {
  console.error(err);
  setError("Something went wrong. Please try again.");
})
    .finally(() => {
      setLoading(false);
    });
};
    return (
    <section
  id="contact"
  data-aos="fade-left"
  className="bg-white py-24"
>
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold text-slate-900">
          Contact Us
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600">
          We'd love to hear from you. Contact us today for professional
          facilities management and property maintenance solutions.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex items-start gap-5 rounded-2xl border p-6 shadow-sm">
              <FaMapMarkerAlt className="mt-1 text-3xl text-green-600" />

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Office Address
                </h3>

                <p className="mt-2 text-gray-600">
  LB8 Calcite Close<br />
  GA-208-1143<br />
  Tesano, Accra<br />
  Near Golden Spoon Hotel
</p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl border p-6 shadow-sm">
              <FaPhoneAlt className="mt-1 text-3xl text-green-600" />

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Phone
                </h3>

                <a
  href="tel:+233244029773"
  className="mt-2 block text-gray-600 transition hover:text-green-600"
>
  +233 24 402 9773
</a>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl border p-6 shadow-sm">
              <FaEnvelope className="mt-1 text-3xl text-green-600" />

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Email
                </h3>

                <a
  href="mailto:netfacilities26@gmail.com"
  className="mt-2 block text-gray-600 transition hover:text-green-600"
>
  netfacilities26@gmail.com
</a>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl border p-6 shadow-sm">
              <FaClock className="mt-1 text-3xl text-green-600" />

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Working Hours
                </h3>

                <p className="mt-2 text-gray-600">
                  Monday - Friday
                  <br />
                  8:00 AM - 5:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <form
  ref={form}
  onSubmit={sendEmail}
  className="rounded-3xl bg-white p-10 shadow-xl"
>

            <h3 className="mb-8 text-3xl font-bold text-slate-900">
              Request a Quote
            </h3>

            <input
  type="text"
  name="from_name"
  placeholder="Full Name"
  required
 className="mb-5 w-full rounded-xl border border-gray-300 bg-white p-4 text-slate-900 placeholder:text-gray-500 focus:border-green-500 focus:outline-none"
/>

            <input
  type="email"
  name="from_email"
  placeholder="Email Address"
  required
  className="mb-5 w-full rounded-xl border border-gray-300 bg-white p-4 text-slate-900 placeholder:text-gray-500 focus:border-green-500 focus:outline-none"
/>

            <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  required
  className="mb-5 w-full rounded-xl border border-gray-300 bg-white p-4 text-slate-900 placeholder:text-gray-500 focus:border-green-500 focus:outline-none"
/>

            <textarea
  name="message"
  rows={5}
  placeholder="Tell us about your project..."
  required
  className="mb-6 w-full rounded-xl border border-gray-300 bg-white p-4 text-slate-900 placeholder:text-gray-500 focus:border-green-500 focus:outline-none"
/>

            <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
>
  {loading ? "Sending..." : "Send Request"}
</button>
{success && (
  <p className="mt-4 text-center font-medium text-green-600">
    {success}
  </p>
)}

{error && (
  <p className="mt-4 text-center font-medium text-red-600">
    {error}
  </p>
)}
          </form>

        </div>
<div className="mt-20 overflow-hidden rounded-3xl shadow-xl">
  <iframe
    src="https://www.google.com/maps?q=LB8+Calcite+Close,+Tesano,+Accra&output=embed"
    width="100%"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="NET Facilities Office Location"
  />
</div>
      </div>
    </section>
  );
}