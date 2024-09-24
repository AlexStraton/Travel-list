import { useState } from "react";

export default function PackingList({
  items,
  deleteItem,
  handleToggle,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function handleDelete(id) {
    deleteItem(id);
  }

  function checkHandler(id) {
    handleToggle(id);
  }

  function handleSort(event) {
    setSortBy(event.target.value);
  }
  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => {
          return (
            <li key={item.id}>
              <input
                type='checkbox'
                value={item.packed}
                onChange={() => checkHandler(item.id)}
              />
              <span
                style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
              </span>
              <button onClick={() => handleDelete(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={handleSort}>
          <option value='input '>Sort by Input order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by Packed Status</option>
        </select>
        <button onClick={handleClear}>Clear List</button>
      </div>
    </div>
  );
}
