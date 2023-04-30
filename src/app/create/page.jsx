import Link from "next/link";

export default function Page() {
  return (
    <>
      <form className="flex flex-col gap-3 items-center">
        <input
          type="text"
          placeholder="Title"
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Price"
          className="border px-4 py-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Content"
          className="border px-4 py-2 w-full rounded"
        />
        <button className="w-5/12  text-white bg-slate-900 px-4 py-2 rounded">
          Create
        </button>
      </form>
    </>
  );
}
