"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/70 text-white backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
  href="/"
  className="flex items-center gap-4 transition-opacity hover:opacity-90"
>
  <Image
    src="/logo.png"
    alt="NET Facilities Logo"
    width={60}
    height={60}
    className="h-14 w-auto"
  />

  <div>
    <h1 className="text-2xl font-bold">
      NET <span className="text-green-500">Facilities</span>
    </h1>

    <p className="text-xs text-gray-300">
      Properties Management Ltd
    </p>
  </div>
</Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
  href="/"
  className="relative transition hover:text-green-400"
>
  Home
</Link>
          <Link
  href="/about"
  className="relative transition hover:text-green-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
>
  About
</Link>
          <Link
  href="/services"
  className="relative transition hover:text-green-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
>
  Services
</Link>
          <Link
  href="/contact"
  className="relative transition hover:text-green-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
>
  Contact
</Link>
        </nav>

        <div className="flex items-center gap-4">

  <Link
    href="/contact"
    className="hidden rounded-lg bg-green-600 px-5 py-2 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-green-700 md:block"
  >
    Request Quote
  </Link>

  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden"
  >
    {isOpen ? <X size={30} /> : <Menu size={30} />}
  </button>

</div>
{isOpen && (
  <div className="border-t border-white/10 bg-slate-900 md:hidden">
    <nav className="flex flex-col px-6 py-4">

      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className="py-3 hover:text-green-400"
      >
        Home
      </Link>

      <Link
        href="/about"
        onClick={() => setIsOpen(false)}
        className="py-3 hover:text-green-400"
      >
        About
      </Link>

      <Link
        href="/services"
        onClick={() => setIsOpen(false)}
        className="py-3 hover:text-green-400"
      >
        Services
      </Link>

      <Link
        href="/contact"
        onClick={() => setIsOpen(false)}
        className="py-3 hover:text-green-400"
      >
        Contact
      </Link>

      <Link
        href="/contact"
        onClick={() => setIsOpen(false)}
        className="mt-4 rounded-lg bg-green-600 px-5 py-3 text-center font-semibold transition hover:bg-green-700"
      >
        Request Quote
      </Link>

    </nav>
  </div>
)}
      </div>
    </header>
  );
}