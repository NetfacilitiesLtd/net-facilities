export default function AboutCTA() {
  return (
    <section className="bg-slate-900 py-24 text-white">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          Let's Create Better Spaces Together
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-300">
          Whether you require integrated facilities management, property
          maintenance, cleaning services or expert consultancy, NET Facilities &
          Properties Management Ltd is ready to deliver dependable,
          cost-effective and sustainable solutions tailored to your needs.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <a
            href="/#contact"
            className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold transition duration-300 hover:bg-green-700"
          >
            Request a Quote
          </a>

          <a
            href="/#services"
            className="rounded-xl border border-white px-8 py-4 text-lg font-semibold transition duration-300 hover:bg-white hover:text-slate-900"
          >
            Explore Our Services
          </a>

        </div>

      </div>

    </section>
  );
}