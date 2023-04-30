import Link from "next/link";

const getProducts = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/product`, {
    cache: "no-store",
  });

  return res.json();
};

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <Link href="/create">
        <button className="px-5 py-3 rounded-md text-white bg-slate-800 inline-block">
          Create
        </button>
      </Link>
      <main className="flex flex-col gap-3">
        {products.map(({ id, title, slug, price, content }, index) => (
          <Link key={id} href={`/${slug}`}>
            <article className="border p-4 rounded-md">
              <h3 className="font-medium text-slate-800 text-lg">{title}</h3>
              <h2 className="font-semibold text-2xl">Rp{price}</h2>
              <p className="font-normal text-slate-500">{content}</p>
            </article>
          </Link>
        ))}
      </main>
    </>
  );
}
