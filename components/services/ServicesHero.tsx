export default function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden py-32 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,0.72), rgba(15,23,42,0.72)), url('/services-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h1 className="text-5xl font-bold md:text-6xl">
          Our Services
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-200 md:text-xl">
          Professional facilities management, property management,
          maintenance, cleaning and consultancy services tailored to
          commercial, residential, industrial and retail properties.
        </p>

      </div>
    </section>
  );
}