import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function addedItem(item) {
    setItems((previousItems) => [...previousItems, item]);
  }

  function deleteItem(id) {
    setItems((previousItems) =>
      previousItems.filter((items) => items.id !== id)
    );
  }
  function handleToggle(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <Logo />
      <Form addedItem={addedItem} />
      <PackingList
        deleteItem={deleteItem}
        handleToggle={handleToggle}
        items={items}
      />
      <Stats />
    </>
  );
}
