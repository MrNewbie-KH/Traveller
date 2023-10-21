import Item from "./Item";
function List({ items, handleDeleteItem, handlePacked }) {
  const list = items.map((item) => {
    return (
      <Item
        key={item.id}
        item={item}
        handleDeleteItem={handleDeleteItem}
        handlePacked={handlePacked}
      />
    );
  });
  return (
    <div className="list">
      <ul>{list}</ul>
    </div>
  );
}
export default List;
