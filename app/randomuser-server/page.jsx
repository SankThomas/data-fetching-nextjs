import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function RandomUserServer() {
  const data = await fetch("https://randomuser.me/api");
  const users = await data.json();

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

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {users.results.map((person) => (
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

      <div className="mt-4 flex items-center justify-center gap-4">
        <Link href="/" className="rounded border p-4">
          Back
        </Link>
      </div>
    </div>
  );
}
