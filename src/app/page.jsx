import Link from "next/link";

const getProduct = async () => {
  const req = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  return req.json;
};

export default async function Home() {
  const product = await getProduct();
  console.log(product);

  JSON.stringify(product);

  const products = [
    {
      id: 1,
      title: "Tank Amerika",
      price: 45000,
      content: "Gw mau jajah kenapa muahaha",
    },
    {
      id: 2,
      title: "Pesawat Nazi",
      price: 500,
      content: "sama gw juga",
    },
    {
      id: 3,
      title: "Benda ajaib melayang",
      price: 666,
      content: "duar",
    },
    {
      id: 4,
      title: "Pak Hitler",
      price: 10000,
      content: "progamer",
    },
    {
      id: 5,
      title: "Jukut",
      price: 0,
      content: "gratis gak ada harganya",
    },
    {
      id: 6,
      title: "pahala",
      price: 100000000,
      content: "stonk nih",
    },
  ];

  return (
    <>
      <Link href="/create">
        <button className="px-5 py-3 rounded-md text-white bg-slate-800 inline-block">
          Create
        </button>
      </Link>
      <main className="flex flex-col gap-3">
        {products.map(({ title, price, content }, index) => (
          <article key={index} className="border p-4 rounded-md">
            <h3 className="font-medium text-slate-800 text-lg">{title}</h3>
            <h2 className="font-semibold text-2xl">Rp{price}</h2>
            <p className="font-normal text-slate-500">{content}</p>
          </article>
        ))}
      </main>
    </>
  );
}
