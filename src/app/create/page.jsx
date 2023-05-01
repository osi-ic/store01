"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const postProduct = async ({ slug, title, price, content }) => {
  const res = await fetch("https://store01.vercel.app/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      slug,
      price: Number(price),
      content,
    }),
  });

  return res.json();
};

export default function Page() {
  const [field, setField] = useState({});
  const router = useRouter();

  const setValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setField({
      ...field,
      [name]: value,
    });
  };

  const doSubmit = async (e) => {
    e.preventDefault();
    const product = await postProduct(field);
    router.push("/");
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
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          name="content"
          placeholder="Content"
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <button
          type="submit"
          onClick={doSubmit}
          className="w-full text-white bg-slate-900 px-4 py-2 rounded"
        >
          Create
        </button>
      </form>
    </>
  );
}
