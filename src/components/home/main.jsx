import Item from "./item";

export default function Button() {
  return (
    <main className="flex flex-col gap-3">
      {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </main>
  );
}
