function Footer({ items }) {
  const allItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  return (
    <footer className="status">
      You have {allItems} Items on your list, and you already packed{" "}
      {packedItems} (
      {allItems
        ? Math.round((packedItems / allItems) * 100) + "%"
        : "Nothink Packed"}
      )
    </footer>
  );
}
export default Footer;
