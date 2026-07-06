"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const hasVisited = sessionStorage.getItem("netfacilities-loading");

  if (!hasVisited) {
    setLoading(true);
    sessionStorage.setItem("netfacilities-loading", "true");

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }
}, []);
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <Image
        src="/logo.png"
        alt="NET Facilities Logo"
        width={180}
        height={180}
        className="mb-6 h-auto w-40"
        priority
      />

      <h2 className="mb-6 text-center text-2xl font-bold text-slate-900">
        NET Facilities & Properties Management Ltd
      </h2>

      <div className="flex space-x-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-green-600"></span>
        <span
          className="h-3 w-3 animate-bounce rounded-full bg-green-600"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="h-3 w-3 animate-bounce rounded-full bg-green-600"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>
    </div>
  );
}