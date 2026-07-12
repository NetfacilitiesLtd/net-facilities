export default function SectorsServed() {
  return (
 <section className="py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-4xl font-bold text-slate-900">
        Sectors We Serve
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
        Our tailored facilities and property management solutions support a
        wide range of industries, delivering reliable services that meet the
        unique needs of every environment.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 text-5xl">🏢</div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Commercial
        </h3>

        <p className="text-gray-600">
          Office buildings, business parks and corporate facilities requiring
          professional maintenance and tenant-focused services.
        </p>

      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 text-5xl">🏘️</div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Residential
        </h3>

        <p className="text-gray-600">
          Apartment complexes, gated communities and residential estates with
          dependable maintenance and community support.
        </p>

      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 text-5xl">🏭</div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Industrial & Logistics
        </h3>

        <p className="text-gray-600">
          Warehouses, manufacturing facilities and logistics hubs requiring
          reliable asset maintenance and regulatory compliance.
        </p>

      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 text-5xl">🛍️</div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Retail
        </h3>

        <p className="text-gray-600">
          Shopping centres and retail spaces where cleanliness, appearance and
          customer experience are top priorities.
        </p>

      </div>

    </div>

  </div>

</section>
  );
}   