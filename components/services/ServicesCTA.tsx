export default function ServicesCTA() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          Looking for a Trusted Facilities Management Partner?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
          Whether you manage a commercial office, residential community,
          industrial facility or retail development, NET Facilities &
          Properties Management Ltd is ready to provide dependable,
          cost-effective and sustainable facilities management solutions
          tailored to your needs.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <a
            href="/contact"
            className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-green-700"
          >
            Request a Quote
          </a>

          <a
            href="/about"
            className="rounded-xl border border-slate-900 px-8 py-4 text-lg font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
          >
            Learn More About Us
          </a>

        </div>

      </div>

    </section>
  );
}