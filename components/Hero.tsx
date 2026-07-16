export default function Hero() {
  return (
    <section
  id="home"
  data-aos="fade-up"
  className="relative min-h-screen overflow-hidden pt-40 pb-24 text-white flex items-center"
  style={{
  backgroundImage:
  "linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.75)), url('/hero.png')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
}}
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-6 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2">
  <span className="mr-2 text-green-400">✓</span>
  <span className="text-sm font-semibold uppercase tracking-wider text-green-300">
  Serving Ghana • Supporting Clients Across the UK & Europe
</span>
</div>

        <h2 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-6xl">
  Integrated Facilities &
  <br />
  Property Management
  <br />
  Across Ghana
</h2>
<p className="mt-4 text-xl font-semibold text-green-300 md:text-2xl">
  Supporting Businesses & Property Owners in the UK and Europe
</p>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
  NET Facilities & Properties Management Ltd delivers integrated
  facilities management, property maintenance, cleaning services,
  consultancy and asset management from our headquarters in Ghana,
  while supporting businesses, property owners and project partners
  across the United Kingdom and Europe through internationally
  aligned service standards.
</p>

        <div className="mt-10 flex gap-4">
          <a
  href="#contact"
  className="rounded-xl bg-green-600 px-8 py-4 font-semibold shadow-lg shadow-green-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:shadow-2xl hover:shadow-green-500/40"
>
  Request Quote
</a>

          <a
 href="https://wa.me/233244029773?text=Hello%20NET%20Facilities,%20I%20would%20like%20to%20book%20one%20of%20your%20services."
  rel="noopener noreferrer"
  className="rounded-lg border border-white px-8 py-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-900 hover:shadow-xl"
>
  WhatsApp Us
</a>
        </div>
<div className="mt-10 flex flex-wrap gap-8 text-sm text-gray-200">

  <div className="flex items-center gap-2">
    <span className="text-green-400">✔</span>
    Professional Team
  </div>

  <div className="flex items-center gap-2">
    <span className="text-green-400">✔</span>
    Reliable Service
  </div>

  <div className="flex items-center gap-2">
    <span className="text-green-400">✔</span>
    Client Focused
  </div>

</div>
      </div>
    </section>
  );
}