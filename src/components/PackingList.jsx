import { useState } from "react";

export default function PackingList({ items, deleteItem, handleToggle }) {
  function handleDelete(id) {
    deleteItem(id);
  }

  function checkHandler(id) {
    handleToggle(id);
  }

  return (
    <div className='list'>
      {items.map((item) => {
        return (
          <ul>
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
