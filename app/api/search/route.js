import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "Missing query parameter" },
      { status: 400 },
    );
  }

  const res = await fetch(
    `https://demo.dataverse.org/api/search?q=${encodeURIComponent(query)}`,
    {
      headers: {
        "User-Agent": "Next.js App",
        Accept: "application/json",
      },
    },
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch from Dataverse" },
      { status: 500 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
