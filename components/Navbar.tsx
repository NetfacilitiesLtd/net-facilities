import Image from "next/image";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/70 text-white backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-4">
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
</div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
  href="#home"
  className="relative transition hover:text-green-400"
>
  Home
</a>
          <a
  href="#about"
  className="relative transition hover:text-green-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
>
  About
</a>
          <a
  href="#services"
  className="relative transition hover:text-green-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
>
  Services
</a>
          <a
  href="#contact"
  className="relative transition hover:text-green-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
>
  Contact
</a>
        </nav>

        <button className="rounded-lg bg-green-600 px-5 py-2 font-semibold transition duration-300 hover:bg-green-700 hover:-translate-y-1">
          Request Quote
        </button>

      </div>
    </header>
  );
}