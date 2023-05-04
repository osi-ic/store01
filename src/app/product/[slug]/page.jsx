"use client";

import Link from "next/link";
import { useRouter, redirect } from "next/navigation";

const getOneProduct = async (slug) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${slug}`
  );

  if (!req.ok) return undefined;
  return req.json();
};

const delProduct = async (slug) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${slug}`,
    {
      method: "DELETE",
    }
  );

  if (!req.ok) return undefined;
  return req.json();
};

export default async function Page({ params }) {
  const slug = params.slug;
  const router = useRouter();
  const data = await getOneProduct(slug);

  if (!data) redirect("/");

  const doDelete = async (e) => {
    e.preventDefault();
    const product = await delProduct(slug);
    router.push("/");
  };

  return (
    <>
      <main className="flex flex-col gap-4">
        <Link href="/" className="text-lg font-bold">
          Kembali ke Home
        </Link>

        {data.slug == slug + "gakada" ? (
          <h1>Mau ngapain</h1>
        ) : (
          <>
            <div>
              <h1 className="text-2xl text-slate-800 font-medium">
                {data?.title}
              </h1>
              <h2 className="text-4xl font-semibold">Rp{data?.price}</h2>
              <p className="text-lg text-slate-700 font-light ">
                {data?.content}
              </p>
            </div>

            <div className="flex w-3/12 gap-2">
              <button>Update</button>
              <button onClick={doDelete} className="text-red-600">
                Delete
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
