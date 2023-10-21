import { useState } from "react";

function Item(props) {
  return (
    <li>
      <input
        type="checkbox"
        value={props.item.packed}
        onChange={() => props.handlePacked(props.item.id)}
      />
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        <span>{props.item.quantity}</span> {props.item.description}
      </span>
      <button onClick={() => props.handleDeleteItem(props.item.id)}>
        {" "}
        ❌{" "}
      </button>
    </li>
  );
}
export default Item;
