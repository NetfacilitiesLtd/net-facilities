import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
          READY TO GET STARTED?
        </p>

        <h2 className="text-4xl font-bold text-slate-900">
          Let's Keep Your Property Running at Its Best
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Whether you need facilities management, property maintenance,
          professional cleaning or consultancy services, our team is ready
          to deliver reliable solutions tailored to your business.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <Link
            href="/contact"
            className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-green-700"
          >
            Request a Quote
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-slate-900 px-8 py-4 text-lg font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}