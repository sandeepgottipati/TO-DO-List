import { useState } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
const Form = ({ addItem }) => {
  const [name, setName] = useState("");
  const sbmtHandler = (e) => {
    e.preventDefault();
    let itemId = nanoid();
    if (name) {
      addItem({
        itemName: name,
        id: itemId,
        completed: false,
      });
    } else {
      toast.error("Wrong Input...please Enter some text", {
        position: "top-right",
      });
    }

    setName("");
  };
  return (
    <form onSubmit={sbmtHandler} className="form-control">
      <input
        type="text"
        className="form-input"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};
export default Form;
