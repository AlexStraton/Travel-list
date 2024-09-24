export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className='stats'>
        <em>Start adding some items to your list!</em>
      </p>
    );
  }
  const itemsArray = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = (packed / itemsArray) * 100;

  return (
    <footer className='stats'>
      {percent === 100 ? (
        <em>You got everything! It's time to go ✈️</em>
      ) : (
        <em>
          🛄You have {itemsArray} items on your list, and you already packed{" "}
          {packed} ({Math.round(percent)}%)
        </em>
      )}
    </footer>
  );
}
