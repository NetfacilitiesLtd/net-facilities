import {
  FaComments,
  FaClipboardCheck,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

export default function Process() {
  const steps = [
    {
      icon: <FaComments className="text-4xl text-green-600" />,
      title: "Consultation",
      text: "We discuss your needs and understand your property requirements.",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-green-600" />,
      title: "Planning",
      text: "We prepare a tailored service plan that fits your property.",
    },
    {
      icon: <FaTools className="text-4xl text-green-600" />,
      title: "Service Delivery",
      text: "Our experienced team carries out the work professionally and efficiently.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-green-600" />,
      title: "Quality Inspection",
      text: "We inspect every job to ensure it meets our high standards.",
    },
  ];

  return (
    <section
  data-aos="zoom-in"
  className="bg-gray-50 py-20"
>
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold text-slate-900">
          How We Work
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600">
          Our simple process ensures every project is completed
          professionally, efficiently and to the highest standards.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex justify-center">
                {step.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}