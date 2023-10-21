import { useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Logo from "./components/Logo";
import Form from "./components/Form";
function App() {
  const [items, setItems] = useState([]);
  const handleNewItem = function (item) {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = function (id) {
    setItems((items) => items.filter((current) => current.id !== id));
  };
  function handlePacked(id) {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) return { ...item, packed: !item.packed };
        else return item;
      })
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form handleNewItem={handleNewItem} />
      <List
        items={items}
        handleDeleteItem={handleDeleteItem}
        handlePacked={handlePacked}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
