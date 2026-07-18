export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden py-32 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,0.72), rgba(15,23,42,0.72)), url('/about-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h1 className="text-5xl font-bold md:text-6xl">
          About NET Facilities
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-200 md:text-xl">
          We provide integrated facilities management, property maintenance,
          cleaning, consultancy and support services that create safe,
          efficient and sustainable environments across West Africa, Europe, and the United Kingdom.
        </p>

      </div>
    </section>
  );
}