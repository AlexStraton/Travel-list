export default function Stats({ items }) {
  const itemsArray = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = (packed / itemsArray) * 100;

  console.log(packed);
  return (
    <footer className='stats'>
      <em>
        🛄You have {itemsArray} items on your list, and you already packed{" "}
        {packed} ({Math.round(percent)}%)
      </em>
    </footer>
  );
}
