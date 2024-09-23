const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function PackingList({ items }) {
  return (
    <div className='list'>
      {items.map((item) => {
        return (
          <ul>
            <li key={item.id}>
              <input type='checkbox' />
              <span
                style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
              </span>
              <button>❌</button>
            </li>
          </ul>
        );
      })}

      <select>
        <option value='1'>Sort by</option>
        <option value='2'>Sort by</option>
        <option value='3'>Sort by</option>
      </select>
      <button>Clear List</button>
    </div>
  );
}
