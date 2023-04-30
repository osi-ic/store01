import Link from "next/link";

const getProduct = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default function Page({ params }) {
  return (
    <>
      <main className="flex flex-col gap-4">
        <Link href="/" className="text-lg">
          Kembali ke Home
        </Link>
        <div>
          <h1 className="text-2xl text-slate-900 font-medium">Tank Amerika</h1>
          <h2 className="text-4xl font-semibold">Rp45.000</h2>
          <p className="text-lg text-slate-700 font-light ">
            Gw mau jajah kenapa muahaha
          </p>
        </div>
        <div className="flex w-3/12 gap-2">
          <button className="text-green-600">Update</button>
          <button className="text-red-600">Delete</button>
        </div>
      </main>
    </>
  );
}
