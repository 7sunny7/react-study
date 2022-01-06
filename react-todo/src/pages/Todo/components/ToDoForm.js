import { useState } from "react";

export default function ToDoForm({ addTask }) {
  const [items, setItems] = useState("");

  const handleChange = (e) => {
    setItems(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(items);
    setItems("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={items}
        type='text'
        onChange={handleChange}
        placeholder='Enter task...'
      />
      <button>Submit</button>
    </form>
  );
}
