import Link from "next/link";

export default function Home({ params }) {
  return (
    <>
      <form className="flex flex-col gap-3 items-center">
        <input
          type="text"
          placeholder="Title"
          value="Tank Amerika"
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Price"
          value="Rp45000"
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Content"
          value="Gw mau jajah kenapa muahaha"
          className="border px-4 py-2 w-full rounded"
        />
        <button className="w-5/12  text-white bg-slate-900 px-4 py-2 rounded">
          Update
        </button>
      </form>
    </>
  );
}
