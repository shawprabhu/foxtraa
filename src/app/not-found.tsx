import Link from "next/link";
import React from "react";


export default function NotFound() {
  return (
    <div className="not-found flex flex-col gap-4 justify-center items-center min-h-screen">
      <h2 className="text-3xl ">404 | Not Found</h2>
      <p className="text-xl font-semibold">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}