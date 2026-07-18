import { CircleFlag } from "react-circle-flags";
import { FaGlobeEurope } from "react-icons/fa";
export default function RegionalReach() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
          REGIONAL REACH
        </p>

        <h2 className="text-center text-4xl font-bold text-slate-900">
          Headquartered in Ghana. Supporting Clients Internationally.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">
          From our headquarters in Accra, Ghana, we deliver facilities and
          property management services nationwide while supporting businesses,
          property owners and project partners across the United Kingdom and Europe.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Ghana */}
<div className="group rounded-2xl border-2 border-green-500 bg-white p-10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

  <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-green-700">
    Headquarters
  </div>

  <div className="mb-6 flex justify-center">
    <CircleFlag countryCode="gh" height="70" />
  </div>

  <h3 className="text-3xl font-bold text-slate-900">
    Ghana
  </h3>

  <p className="mt-2 font-semibold text-green-600">
    Accra, Ghana
  </p>

  <ul className="mt-8 space-y-4 text-left text-gray-700">

    <li className="flex items-center gap-3">
      <span className="text-green-600">✔</span>
      Integrated Facilities Management
    </li>

    <li className="flex items-center gap-3">
      <span className="text-green-600">✔</span>
      Property & Asset Management
    </li>

    <li className="flex items-center gap-3">
      <span className="text-green-600">✔</span>
      Cleaning & Maintenance Services
    </li>

  </ul>

</div>

          {/* UK */}
< div className="group rounded-2xl border-2 border-blue-500 bg-white p-10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

  <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-700">
  Headquarters
</div>

  <div className="mb-6 flex justify-center">
    <CircleFlag countryCode="gb" height="70" />
  </div>

  <h3 className="text-3xl font-bold text-slate-900">
    United Kingdom
  </h3>

  <p className="mt-2 font-semibold text-blue-600">
  Harlow, Essex
</p>

  <ul className="mt-8 space-y-4 text-left text-gray-700">

    <li className="flex items-center gap-3">
      <span className="text-green-600">✔</span>
      Facilities Management
    </li>

    <li className="flex items-center gap-3">
      <span className="text-green-600">✔</span>
      Property Consultancy
    </li>

    <li className="flex items-center gap-3">
      <span className="text-green-600">✔</span>
      UK & European Client Support
    </li>

  </ul>

</div>

          {/* Europe */}
<div className="group rounded-2xl border border-gray-200 bg-white p-10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">

  <div className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-purple-700">
    International Partnerships
  </div>

  <div className="mb-6 flex justify-center">
    <img
      src="https://flagcdn.com/w80/eu.png"
      alt="European Union"
      className="h-[70px] w-[70px] rounded-full object-cover"
    />
  </div>

  <h3 className="text-3xl font-bold text-slate-900">
    Europe
  </h3>

  <p className="mt-2 font-semibold text-purple-600">
    International Client Services
  </p>

  <ul className="mt-8 space-y-4 text-left text-gray-700">

    <li className="flex items-center gap-3">
      <span className="text-green-600">✔</span>
      Cross-border Consultancy
    </li>

    <li className="flex items-center gap-3">
      <span className="text-green-600">✔</span>
      Facilities Advisory
    </li>

    <li className="flex items-center gap-3">
      <span className="text-green-600">✔</span>
      Property Support Services
    </li>

  </ul>

</div>

        </div>

      </div>
    </section>
  );
}