"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";

const putProduct = async (oldSlug, { price, ...data }) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${oldSlug}`,
    {
      method: "PUT",
      body: JSON.stringify({
        price: Number(price),
        ...data,
      }),
    }
  );

  if (!req.ok) return undefined;
  return req.json();
};

export default function Page({ params }) {
  const router = useRouter();
  const oldSlug = params?.slug;
  const [field, setField] = useState({});

  useEffect(() => {
    getOneProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOneProduct = async () => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${oldSlug}`
    );
    const { title, slug, price, content } = await req.json();
    if (!title) return redirect("/");
    setField({ title, slug, price, content });
  };

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
    const product = await putProduct(oldSlug, field);
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
          value={field.title}
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          name="slug"
          value={field.slug}
          placeholder="Slug"
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          name="price"
          value={field.price}
          placeholder="Price"
          onChange={setValue}
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          name="content"
          value={field.content}
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
