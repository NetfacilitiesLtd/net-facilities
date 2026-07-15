import {
  FaBuilding,
  FaIndustry,
  FaShoppingBag,
  FaHospital,
  FaCity,
  FaGraduationCap,
} from "react-icons/fa";
export default function AboutCTA() {
  return (
    <section className="bg-gray-50 py-24">
<div className="mx-auto mb-32 max-w-7xl px-6">

  <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
    SECTORS WE SERVE
  </p>

  <h2 className="text-center text-4xl font-bold text-slate-900">
    Delivering Solutions Across Diverse Industries
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">
    We provide tailored facilities management and property support services
    for a wide range of commercial, public and industrial environments across the Globe.
  </p>

  <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    <div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">

  <div className="mb-5 flex justify-center text-5xl text-green-600 transition duration-300 group-hover:scale-110">
    <FaBuilding />
  </div>

  <h3 className="text-xl font-bold text-slate-900">
    Office & Business Parks
  </h3>

  <p className="mt-3 text-gray-600">
    Professional facilities management solutions for modern office buildings and business parks.
  </p>

</div>

<div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">

  <div className="mb-5 flex justify-center text-5xl text-green-600 transition duration-300 group-hover:scale-110">
    <FaIndustry />
  </div>

  <h3 className="text-xl font-bold text-slate-900">
    Industrial & Logistics
  </h3>

  <p className="mt-3 text-gray-600">
    Supporting warehouses, factories and logistics facilities with dependable maintenance services.
  </p>

</div>

<div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">

  <div className="mb-5 flex justify-center text-5xl text-green-600 transition duration-300 group-hover:scale-110">
    <FaShoppingBag />
  </div>

  <h3 className="text-xl font-bold text-slate-900">
    Retail & High Street
  </h3>

  <p className="mt-3 text-gray-600">
    Creating clean, safe and welcoming environments for retail stores and shopping centres.
  </p>

</div>

<div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">

  <div className="mb-5 flex justify-center text-5xl text-green-600 transition duration-300 group-hover:scale-110">
    <FaHospital />
  </div>

  <h3 className="text-xl font-bold text-slate-900">
    Healthcare Premises
  </h3>

  <p className="mt-3 text-gray-600">
    Helping healthcare facilities maintain safe, hygienic and compliant environments.
  </p>

</div>

<div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">

  <div className="mb-5 flex justify-center text-5xl text-green-600 transition duration-300 group-hover:scale-110">
    <FaCity />
  </div>

  <h3 className="text-xl font-bold text-slate-900">
    Mixed-use Developments
  </h3>

  <p className="mt-3 text-gray-600">
    Integrated facilities services for residential, commercial and mixed-use developments.
  </p>

</div>

<div className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">

  <div className="mb-5 flex justify-center text-5xl text-green-600 transition duration-300 group-hover:scale-110">
    <FaGraduationCap />
  </div>

  <h3 className="text-xl font-bold text-slate-900">
    Education Estates
  </h3>

  <p className="mt-3 text-gray-600">
    Supporting schools, colleges and educational institutions with reliable facilities management.
  </p>

</div>
  </div>

</div>
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          Let's Create Better Spaces Together
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
          Whether you require integrated facilities management, property
          maintenance, cleaning services or expert consultancy, NET Facilities &
          Properties Management Ltd is ready to deliver dependable,
          cost-effective and sustainable solutions tailored to your needs.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <a
            href="/contact"
            className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-green-700 hover:-translate-y-1"
          >
            Request a Quote
          </a>

          <a
            href="/services"
            className="rounded-xl border border-slate-900 px-8 py-4 text-lg font-semibold text-slate-900 transition duration-300 hover:bg-slate-900 hover:text-white hover:-translate-y-1"
          >
            Explore Our Services
          </a>

        </div>

      </div>

    </section>
  );
}