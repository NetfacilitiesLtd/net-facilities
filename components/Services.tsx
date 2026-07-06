import { FaBroom, FaBuilding, FaTools } from "react-icons/fa";
export default function Services() {
  return (
    <section
  id="services"
  data-aos="fade-up"
  className="bg-gray-100 py-20"
>
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-4xl font-bold text-slate-900">
          Our Services
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          We provide professional facilities management solutions for homes,
          offices, commercial buildings and industrial properties across Ghana.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-6 text-green-600">
  <FaBroom size={50} />
</div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
  Cleaning Services
</h3>

            <p className="text-gray-600">
              Professional cleaning for offices, homes and commercial facilities.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-6 text-green-600">
  <FaBuilding size={50} />
</div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              Facilities Management
            </h3>

            <p className="text-gray-600">
              Complete management solutions for buildings and business facilities.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-6 text-green-600">
  <FaTools size={50} />
</div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              Property Maintenance
            </h3>

            <p className="text-gray-600">
              Reliable maintenance services to keep your property in excellent condition.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}