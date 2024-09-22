import { useState } from "react";

export default function Form() {
  const [dropdown, setDropdown] = useState(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length === 0) {
      setError("Please enter an item");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='add-form'>
        <h3>What do you need for your trip?</h3>
        <select onChange={(event) => setDropdown(event.target.value)}>
          {nums.map((currentNum) => (
            <option value={currentNum} key={currentNum}>
              {currentNum}
            </option>
          ))}
        </select>
        <div className='error'>
          <label>
            <input
              onChange={(event) => setInput(event.target.value)}
              type='text'
              placeholder='Item...'
            />
          </label>
          {error && <p style={{ color: "black" }}>{error}</p>}
        </div>
        <button>Add</button>
      </form>
    </>
  );
}
