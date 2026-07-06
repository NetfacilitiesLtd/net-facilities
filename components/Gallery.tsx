"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Office Cleaning",
    image: "/gallery1.jpg",
  },
  {
    title: "Property Maintenance",
    image: "/gallery2.jpg",
  },
  {
    title: "Facilities Management",
    image: "/gallery3.jpg",
  },
  {
    title: "Deep Cleaning",
    image: "/gallery4.jpg",
  },
];

export default function Gallery() {
 const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold text-slate-900">
          Our Recent Projects
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600">
          Explore some of the facilities management, cleaning and property
          maintenance services we proudly deliver across Ghana.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
  src={project.image}
  alt={project.title}
  width={700}
  height={500}
  onClick={() => setSelectedImage(project.image)}
  className="h-[320px] w-full cursor-pointer object-cover transition duration-500 group-hover:scale-110"
/>

              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-gray-200">
                    Professional solutions delivered with quality and care.
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

            </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
        >
          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-black shadow-lg"
            >
              ×
            </button>

            <Image
              src={selectedImage}
              alt="Project"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}