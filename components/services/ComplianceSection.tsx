import {
  FaFireExtinguisher,
  FaTint,
  FaHardHat,
  FaBolt,
  FaClipboardCheck,
} from "react-icons/fa";

export default function ComplianceSection() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
          COMPLIANCE & HEALTH & SAFETY
        </p>

        <h2 className="text-center text-4xl font-bold text-slate-900">
          Protecting People, Property & Compliance
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">
          We help organisations maintain safe, compliant and legally responsible
          environments by supporting critical health, safety and regulatory
          requirements across their facilities.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 transition group-hover:scale-110">
              <FaFireExtinguisher />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Fire Risk Assessments
            </h3>

            <p className="mt-3 text-gray-600">
              Comprehensive fire risk assessments and fire safety management to
              help protect people, assets and business operations.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 transition group-hover:scale-110">
              <FaTint />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Legionella Risk Assessments
            </h3>

            <p className="mt-3 text-gray-600">
              Water system inspections and risk assessments in accordance with
              L8 Approved Code of Practice guidance.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 transition group-hover:scale-110">
              <FaHardHat />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Asbestos Management
            </h3>

            <p className="mt-3 text-gray-600">
              Supporting compliance with the Control of Asbestos Regulations
              (CAR 2012) through effective asbestos management.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 transition group-hover:scale-110">
              <FaBolt />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Electrical & Gas Safety
            </h3>

            <p className="mt-3 text-gray-600">
              Planned inspections and compliance checks to help maintain safe
              electrical and gas installations.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
            <div className="mb-5 flex justify-center text-5xl text-green-600 transition group-hover:scale-110">
              <FaClipboardCheck />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Permit-to-Work Management
            </h3>

            <p className="mt-3 text-gray-600">
              Managing contractors and permit-to-work procedures to ensure safe
              execution of maintenance and specialist activities.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}