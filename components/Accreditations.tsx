import {
  FaAward,
  FaLeaf,
  FaShieldAlt,
  FaCertificate,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

export default function Accreditations() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
          ACCREDITATIONS & MEMBERSHIPS
        </p>

        <h2 className="text-center text-4xl font-bold text-slate-900">
          Recognised Standards. Trusted Performance.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">
         Our commitment to internationally recognised standards demonstrates our
  dedication to quality management, environmental responsibility, health &
  safety, and professional excellence across every project we undertake.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 group-hover:scale-110 transition">
              <FaAward />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              ISO 9001:2015
            </h3>
            <p className="mt-3 text-gray-600">
              Quality Management Systems.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 group-hover:scale-110 transition">
              <FaLeaf />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              ISO 14001:2015
            </h3>
            <p className="mt-3 text-gray-600">
              Environmental Management Systems.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 group-hover:scale-110 transition">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              ISO 45001:2018
            </h3>
            <p className="mt-3 text-gray-600">
              Occupational Health & Safety Management.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 group-hover:scale-110 transition">
              <FaCertificate />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              RICS
            </h3>
            <p className="mt-3 text-gray-600">
              Regulated Property Standards.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 group-hover:scale-110 transition">
              <FaUsers />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              IWFM / BIFM
            </h3>
            <p className="mt-3 text-gray-600">
              Facilities Management Membership.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 group-hover:scale-110 transition">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              SafeContractor
            </h3>
            <p className="mt-3 text-gray-600">
              Contractor Safety Accreditation.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}