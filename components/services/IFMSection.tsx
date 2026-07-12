import SectionTitle from "../ui/SectionTitle";

export default function IFMSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Integrated Facilities Management (IFM)"
          subtitle="We provide fully integrated facilities management services that combine technical expertise, operational excellence and proactive maintenance under one reliable partner."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <h3 className="mb-5 text-2xl font-bold text-green-600">
              Hard Services
            </h3>

            <p className="text-lg leading-8 text-gray-600">
              Planned and reactive maintenance of critical building systems,
              ensuring your facilities remain safe, compliant and operating at
              maximum efficiency.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <h3 className="mb-5 text-2xl font-bold text-green-600">
              Soft Services
            </h3>

            <p className="text-lg leading-8 text-gray-600">
              Professional workplace support services that improve cleanliness,
              comfort, safety and the overall experience of employees,
              residents and visitors.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}