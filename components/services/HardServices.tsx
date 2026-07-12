export default function HardServices() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Hard Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Our technical maintenance services keep your buildings operating
            safely, efficiently and in full compliance with industry standards.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-xl">
            <div className="mb-5 text-5xl">❄️</div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              HVAC Maintenance
            </h3>

            <p className="text-gray-600">
              Installation, servicing and preventative maintenance of heating,
              ventilation and air conditioning systems.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-xl">
            <div className="mb-5 text-5xl">⚡</div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Electrical Systems
            </h3>

            <p className="text-gray-600">
              Inspection, repair and maintenance of electrical infrastructure
              for safe and uninterrupted operations.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-xl">
            <div className="mb-5 text-5xl">🚰</div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Plumbing
            </h3>

            <p className="text-gray-600">
              Complete plumbing maintenance, repairs and water system
              management to ensure reliable building performance.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-xl">
            <div className="mb-5 text-5xl">🔥</div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Fire & Life Safety
            </h3>

            <p className="text-gray-600">
              Fire protection systems, emergency preparedness and compliance
              with safety regulations.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-xl">
            <div className="mb-5 text-5xl">🏗️</div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Structural Maintenance
            </h3>

            <p className="text-gray-600">
              Preventative maintenance and repairs that preserve the integrity
              and longevity of your facilities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}