import { useState } from "react";

function Form({ handleNewItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const options = function () {
    const arr = [];
    for (let i = 1; i <= 20; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      quantity: +quantity,
      description,
      id: Date.now(),
      packed: false,
    };
    handleNewItem(newItem);
    setDescription("");
    setQuantity(1);
    console.log(newItem);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {options()}
      </select>
      <input
        type="text"
        placeholder="... item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
export default Form;
