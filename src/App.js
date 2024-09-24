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

  return (
    <>
      <Logo />
      <Form addedItem={addedItem} />
      <PackingList deleteItem={deleteItem} items={items} />
      <Stats />
    </>
  );
}
