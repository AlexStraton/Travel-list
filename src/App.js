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

  return (
    <>
      <Logo />
      <Form addedItem={addedItem} />
      <PackingList items={items} />
      <Stats />
    </>
  );
}
