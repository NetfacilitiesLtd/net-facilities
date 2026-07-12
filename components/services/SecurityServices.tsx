export default function SecurityServices() {
  return (
    <section className="py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-4xl font-bold text-slate-900">
        Security Services
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
        We help protect people, property and assets through dependable security
        solutions tailored to each client's operational requirements.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 text-5xl">🛡️</div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Manned Guarding
        </h3>

        <p className="text-gray-600">
          Professional security personnel providing round-the-clock protection,
          access monitoring and incident response.
        </p>

      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 text-5xl">📹</div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          CCTV Monitoring
        </h3>

        <p className="text-gray-600">
          Advanced surveillance systems that enhance visibility, improve
          security and support rapid incident detection.
        </p>

      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 text-5xl">🚪</div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Access Control
        </h3>

        <p className="text-gray-600">
          Secure entry management systems that ensure only authorized personnel
          can access your facilities.
        </p>

      </div>

    </div>

  </div>

</section>
  );
}