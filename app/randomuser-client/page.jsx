"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function RandomUserClient() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      setPeople(data.results);
    } catch (error) {
      console.error("Failed to get user data: ", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">{error}</div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {people.map((person) => (
        <div
          key={person.login.uuid}
          className="w-80 space-y-4 rounded border border-stone-800 p-4"
        >
          <Image
            src={person.picture.large}
            alt={person.name.first}
            width={400}
            height={400}
            className="mx-auto size-24 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">
              {person.name.title} {person.name.first} {person.name.last}
            </h2>

            <p>@{person.login.username}</p>
            <p>{person.email}</p>
          </div>
        </div>
      ))}

      <Link href="/" className="rounded border p-4">
        Back
      </Link>
    </div>
  );
}
