import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">

        <Image
          src="/logo.png"
          alt="NET Facilities Logo"
          width={180}
          height={180}
          className="mx-auto mb-8 h-auto w-40"
          priority
        />

        <h1 className="mb-4 text-6xl font-extrabold text-slate-900">
          404
        </h1>

        <h2 className="mb-4 text-3xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mb-10 text-lg text-gray-600">
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-block rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
        >
          ← Return to Home
        </Link>

      </div>
    </main>
  );
}