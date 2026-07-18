import Image from "next/image";
export default function WhyChooseUs() {
  return (
    <section
  id="about"
  data-aos="fade-right"
  className="bg-white py-20"
>
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold text-slate-900">
  About NET Facilities
</h2>

        <p className="mx-auto mb-16 max-w-4xl text-center text-lg leading-8 text-gray-600">
  NET Facilities & Properties Management Ltd is committed to delivering
  professional facilities management, cleaning, property maintenance and
  consultancy services across West Africa, Europe, and the United Kingdom. We combine industry expertise,
  innovative solutions and exceptional customer service to help businesses,
  institutions and homeowners maintain safe, clean and efficient
  environments.
</p>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
  <Image
  src="/about.png"
  alt="NET Facilities Team"
  width={700}
  height={500}
  className="w-full h-auto rounded-3xl border-4 border-green-500 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-green-500/30"
/>
</div>

          <div className="space-y-6">
<h3 className="text-3xl font-bold text-slate-900">
  Why Businesses Choose Us
</h3>

<p className="text-lg leading-8 text-gray-600">
  We are committed to delivering reliable, high-quality facilities
  management services through experienced professionals, modern
  equipment and a customer-first approach.
</p>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
              <h3 className="mb-3 text-2xl font-bold text-green-600">
  Experienced Professionals
</h3>

              <p className="text-gray-600">
                Our trained professionals deliver high-quality services with attention to detail.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
  <h3 className="mb-3 text-2xl font-bold text-green-600">
    Customer-Focused Service
  </h3>

  <p className="text-gray-600">
    We provide dependable maintenance and cleaning solutions tailored to every client's needs.
  </p>
</div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
              <h3 className="mb-3 text-2xl font-bold text-green-600">
                Modern Equipment & Technology
              </h3>

              <p className="text-gray-600">
                We use professional equipment and industry best practices to deliver excellent results.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
              <h3 className="mb-3 text-2xl font-bold text-green-600">
                Quality Assurance
              </h3>

              <p className="text-gray-600">
                Our goal is to build long-term relationships through quality service and trust.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}