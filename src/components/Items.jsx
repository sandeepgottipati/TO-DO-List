import Item from "./Item";
const Items = ({ items, onDeleteItem, onEditItem }) => {
  return (
    <article className="items">
      {items.map((item) => {
        const { itemName, id, completed } = item;
        return (
          <Item
            {...item}
            key={id}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
          />
        );
      })}
    </article>
  );
};
export default Items;
