function Item(props) {
  return (
    <li>
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        <span>{props.item.quantity}</span> {props.item.description}
      </span>
      <button>&times;</button>
    </li>
  );
}
export default Item;
