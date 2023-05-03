import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Link href="/" className="text-lg font-bold">
        Kembali ke Home
      </Link>

      <h1>Halaman-nya gak ada bang</h1>
    </>
  );
}
