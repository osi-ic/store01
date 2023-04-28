import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/create">
        <button className="px-5 py-3 rounded-md text-white bg-slate-800 inline-block">
          Create
        </button>
      </Link>
      <main className="flex flex-col gap-3">
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <article key={index} className="border p-4 rounded-md">
            <h3 className="font-medium text-slate-800 text-lg">Tank Amerika</h3>
            <h2 className="font-semibold text-2xl">Rp45.000</h2>
            <p className="font-normal text-slate-500">
              Gw mau jajah kenapa muahaha
            </p>
          </article>
        ))}
      </main>
    </>
  );
}
