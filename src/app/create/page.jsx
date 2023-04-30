"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [field, setField] = useState({});

  const setValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setField({
      ...field,
      [name]: value,
    });
  };

  const doSubmit = (e) => {
    e.preventDefault();
    console.log(field);
  };

  return (
    <>
      <Link href="/" className="text-lg font-bold">
        Kembali ke Home
      </Link>
      <form method="post" className="flex flex-col gap-3 items-center">
        <input
          type="text"
          name="tittle"
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
