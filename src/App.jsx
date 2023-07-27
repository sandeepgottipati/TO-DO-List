import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "./components/Form";
import Items from "./components/Items";
const addItemsLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
const App = () => {
  const [itemList, setItemList] = useState(defaultList);
  function addItem(item) {
    const newList = [...itemList, item];
    addItemsLocalStorage(newList);
    setItemList(() => {
      return newList;
    });
    toast.success("Item Added Successfully !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  const removeItem = (id) => {
    const updatedList = itemList.filter((item) => {
      return item.id !== id;
    });

    setItemList(updatedList);
    addItemsLocalStorage(updatedList);
    toast.success("Item Removed !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const editItem = (id) => {
    const newList = itemList.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItemList(newList);
    addItemsLocalStorage(newList);
  };
  return (
    <section className="section-center">
      <h4>Grocery Bud</h4>
      <Form addItem={addItem} />
      <Items items={itemList} onDeleteItem={removeItem} onEditItem={editItem} />
      <ToastContainer />
    </section>
  );
};

export default App;
