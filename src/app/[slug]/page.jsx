import Link from "next/link";

const getOneProduct = async (slug) => {
  const req = await fetch(`${process.env.BASE_URL}/api/product/${slug}`);
  return req.json();
};

export default async function Page({ params }) {
  const slug = params.slug;
  const { title, price, content } = await getOneProduct(slug);

  return (
    <>
      <main className="flex flex-col gap-4">
        <Link href="/" className="text-lg font-bold">
          Kembali ke Home
        </Link>

        <div>
          <h1 className="text-2xl text-slate-800 font-medium">{title}</h1>
          <h2 className="text-4xl font-semibold">Rp{price}</h2>
          <p className="text-lg text-slate-700 font-light ">{content}</p>
        </div>

        <div className="flex w-3/12 gap-2">
          <button className="text-green-600">Update</button>
          <button className="text-red-600">Delete</button>
        </div>
      </main>
    </>
  );
}
