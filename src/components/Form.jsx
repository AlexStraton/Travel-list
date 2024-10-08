import { useState } from "react";

export default function Form({ addedItem }) {
  const [quantity, setQuantity] = useState(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  function handleSubmit(e) {
    e.preventDefault();
    if (description.length === 0) {
      setError("Please enter an item");
    }
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Math.floor(Math.random() * 1000),
    };
    addedItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='add-form'>
        <h3>What do you need for your trip?</h3>
        <select
          onChange={(event) => setQuantity(Number(event.target.value))}
          value={quantity}>
          {nums.map((currentNum) => (
            <option value={currentNum} key={currentNum}>
              {currentNum}
            </option>
          ))}
        </select>
        <div className='error'>
          <label>
            <input
              onChange={(event) => setDescription(event.target.value)}
              type='text'
              placeholder='Item...'
              value={description}
            />
          </label>
          {error && <p style={{ color: "black" }}>{error}</p>}
        </div>
        <button>Add</button>
      </form>
    </>
  );
}
