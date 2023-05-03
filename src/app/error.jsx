"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Kek nya ada yang salah!</h2>
      <button
        className="px-5 py-3 rounded-md text-white bg-slate-800 inline-block"
        onClick={() => reset()}
      >
        Coba lagi bang
      </button>
    </div>
  );
}
