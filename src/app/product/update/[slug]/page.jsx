"use client";

import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";

const getOneProduct = async (slug) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${slug}`
  );

  if (!req.ok) return undefined;
  return req.json();
};

const putProduct = async (slug, data) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${slug}`,
    {
      method: "PUT",
      body: JSON.stringify({
        slug,
        ...data,
      }),
    }
  );

  if (!req.ok) return undefined;
  return req.json();
};

export default async function Page({ params }) {
  const slug = params?.slug;
  const [fiield, setFiield] = useState({});
  const data = await getOneProduct(slug);

  if (!data) redirect("/");

  const setValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFiield({
      ...fiield,
      [name]: value,
    });
  };

  const doSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(fiield).length == 0) {
      setFiield(data);
    }

    console.log(fiield);

    // const product = await putProduct(fiield);
    // return redirect("/");
  };

  return (
    <>
      <Link href="/" className="text-lg font-bold">
        Kembali ke Home
      </Link>
      <form method="post" className="flex flex-col gap-3 items-center">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={fiield.title}
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          name="slug"
          value={fiield.slug}
          placeholder="Slug"
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          name="price"
          value={fiield.price}
          placeholder="Price"
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          name="content"
          value={fiield.content}
          placeholder="Content"
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <button
          type="submit"
          onClick={doSubmit}
          className="w-full text-white bg-slate-900 px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </>
  );
}
