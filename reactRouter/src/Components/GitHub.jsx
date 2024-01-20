import React from "react";
import { useLoaderData } from "react-router-dom";

export function GitHub() {
    const data = useLoaderData();
  return <div className="bg-gray-700 text-white text-center text-3xl p-4">followers : {data.followers}</div>;
}

export async function GitHubInfo() {
  const response = await fetch("https://api.github.com/users/sag06");
  return response.json();
}
