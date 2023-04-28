export default function Item({ item: { title, content, price }, index }) {
  return (
    <article key={index} className="border p-4 rounded-md">
      <h3 className="font-medium text-slate-800 text-lg">{title}</h3>
      <h2 className="font-semibold text-2xl">{price}</h2>
      <p className="font-normal text-slate-500">{content}</p>
    </article>
  );
}
