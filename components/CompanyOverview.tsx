import Image from "next/image";

export default function CompanyOverview() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Content */}
        <div>

          <h2 className="mb-8 text-4xl font-bold text-slate-900">
            Who We Are
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            NET Facilities & Properties Management Ltd is a professional
            facilities management company committed to delivering exceptional
            property management, maintenance, cleaning and consultancy
            services across West Africa, Europe, and the United Kingdom.
          </p>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            We combine experienced professionals, modern technology and
            industry best practices to create clean, safe, efficient and
            sustainable environments for commercial, residential, industrial
            and retail properties.
          </p>

          <p className="text-lg leading-8 text-gray-600">
            Our commitment to excellence, innovation and customer satisfaction
            makes us a trusted partner for organizations seeking dependable,
            long-term facilities management solutions.
          </p>

        </div>

        {/* Right Image */}
        <div>

          <Image
            src="/about.png"
            alt="Professional cleaning services"
            width={700}
            height={700}
            loading="eager" 
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}