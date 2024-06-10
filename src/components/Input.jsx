/* eslint-disable react/prop-types */
import { useState } from "react";

const Input = ({ onAddTask }) => {
  const [change, setChange] = useState("");

  const handleClick = () => {
    if (change.trim()) {
      onAddTask(change);
      setChange(""); // Clear the input field after adding the task
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 pb-2">
      <input
        type="text"
        className="bg-slate-300 focus:outline-none px-2 py-1 rounded-sm text-slate-600 text-lg"
        value={change}
        onChange={(e) => setChange(e.target.value)}
      />
        <button
          className="bg-slate-500 text-slate-200 rounded-sm px-2 py-1 hover:cursor-pointer"
          onClick={handleClick}
        >
          Add Task
        </button>
    </div>
  );
};

export default Input;
