export default function PropertyManagement() {
  return (
    <section className="bg-slate-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-4xl font-bold text-slate-900">
        Property & Asset Management
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
        Our property management services help property owners maximize asset
        value, improve tenant satisfaction and maintain long-term operational
        excellence.
      </p>

    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">

      <div className="rounded-3xl bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 text-5xl">🏢</div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Tenant Relations & Leasing
        </h3>

        <p className="text-gray-600 leading-7">
          We manage tenant onboarding, lease administration, rent collection
          and dispute resolution to build strong, lasting relationships.
        </p>

      </div>

      <div className="rounded-3xl bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 text-5xl">📊</div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Financial Reporting
        </h3>

        <p className="text-gray-600 leading-7">
          Transparent budgeting, financial reporting, variance analysis and
          capital expenditure planning that support informed decision-making.
        </p>

      </div>

      <div className="rounded-3xl bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 text-5xl">📋</div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Risk & Compliance
        </h3>

        <p className="text-gray-600 leading-7">
          Regular health, safety and environmental audits ensure compliance
          with local regulations while reducing operational risks.
        </p>

      </div>

    </div>

  </div>

</section>
  );
}