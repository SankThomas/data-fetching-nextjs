"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/utils";

export default function Home() {
  const [query, setQuery] = useState("home");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await fetchData(query);
      setData(result);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex justify-center">
        <form onSubmit={handleSearch} className="space-x-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded border px-4 py-2 sm:w-[500px]"
            placeholder="Search for something"
            required
          />
          <button className="rounded bg-neutral-800 px-6 py-2">Search</button>
        </form>
      </div>

      {loading && <p className="mt-6 text-center">Loading…</p>}
      {error && <p className="mt-6 text-center text-red-500">{error}</p>}

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {data?.data?.items?.length === 0 && (
          <p className="col-span-2 text-center text-sm text-neutral-400">
            Oops. Nothing to show.
          </p>
        )}

        {data?.data?.items?.map((item) => (
          <Link href={`/${item.name}`} key={item.name}>
            <article className="rounded-md border p-4 hover:border-neutral-600">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-sm text-neutral-400">
                {item.description?.slice(0, 200)}…
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
