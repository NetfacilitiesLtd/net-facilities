export default function CTA() {
  return (
    <section id="contact" className="bg-green-600 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Keep Your Property in Perfect Condition?
        </h2>

        <p className="mt-6 text-lg text-green-100">
          Whether you need professional cleaning, facilities management,
          property maintenance or consultancy, our team is ready to help.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-lg bg-white px-8 py-4 font-semibold text-green-700 transition duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl">
            Request a Free Quote
          </button>

          <button className="rounded-lg border border-white px-8 py-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-green-700 hover:shadow-xl">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}