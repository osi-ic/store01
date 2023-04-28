import Link from "next/link";

export default function Button() {
  return (
    <Link href="/create">
      <button className="px-5 py-3 rounded-md text-white bg-slate-800 inline-block">
        Create
      </button>
    </Link>
  );
}
