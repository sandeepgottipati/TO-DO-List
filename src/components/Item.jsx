const Item = ({ itemName, completed, id, onDeleteItem, onEditItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          onEditItem(id);
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {itemName}
      </p>
      <button
        className="remove-btn"
        onClick={() => {
          onDeleteItem(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default Item;
