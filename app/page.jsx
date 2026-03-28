import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center gap-4 p-4">
      <Link href="/dataverse" className="rounded border p-4">
        Dataverse api
      </Link>
      <Link href="/randomuser" className="rounded border p-4">
        Randomuser api
      </Link>
    </div>
  );
}
