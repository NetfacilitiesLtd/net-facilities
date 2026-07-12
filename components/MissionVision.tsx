export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Our Mission & Vision
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Our purpose is to deliver exceptional facilities management
            solutions while creating long-term value for our clients through
            innovation, sustainability and operational excellence.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Mission */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <div className="mb-6 text-5xl">🎯</div>

            <h3 className="mb-6 text-3xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="text-lg leading-8 text-gray-600">
              To maximize the value of our clients' real estate assets through
              proactive management, sustainable operational practices and
              seamless service delivery that ensures safe, efficient and
              inspiring environments.
            </p>

          </div>

          {/* Vision */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <div className="mb-6 text-5xl">🚀</div>

            <h3 className="mb-6 text-3xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="text-lg leading-8 text-gray-600">
              To be the premier partner in property and facilities management,
              recognized for transforming spaces through smart technology,
              sustainability and an uncompromising commitment to service
              excellence.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}