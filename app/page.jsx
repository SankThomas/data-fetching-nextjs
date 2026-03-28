import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center gap-4 p-4">
      <Link href="/randomuser-client" className="rounded border p-4">
        In a client component
      </Link>
      <Link href="/randomuser-server" className="rounded border p-4">
        In a server component
      </Link>
      <Link href="/dataverse" className="rounded border p-4">
        Using an API route
      </Link>
    </div>
  );
}
