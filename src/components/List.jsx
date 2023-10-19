const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
import Item from "./Item";
function List() {
  const list = initialItems.map((item) => {
    return <Item key={item.id} item={item} />;
  });
  return (
    <div className="list">
      <ul>{list}</ul>
    </div>
  );
}
export default List;
