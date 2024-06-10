/* eslint-disable react/prop-types */
import { useState } from "react";

const Task = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let content;
  if (isEditing) {
    content = (
      <div className="flex justify-center flex-wrap gap-4 mb-2">
        <div className="w-1/2 max-sm:w-full">
          <input
            type="text"
            value={task.title}
            className="text-black text-lg bg-slate-200 px-1 py-1 w-full rounded-sm box-border focus:outline-none"
            onChange={(e) => {
              onChange({
                ...task,
                title: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            className="bg-orange-300 px-2 py-1 text-lg rounded-sm"
            onClick={() => {
              if (!task.title.trim()) {
                setIsEditing(true);
              } else {
                setIsEditing(false);
              }
            }}
          >
            save
          </button>
          <button
            className="bg-red-400 px-2 py-1 text-lg rounded-sm"
            onClick={() => onDelete(task.id)}
          >
            delete
          </button>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="flex justify-center flex-wrap gap-4 mb-4">
        <div className=" bg-slate-200 px-4 py-1 rounded-sm max-sm:w-full  w-1/2">
          <p className="text-black text-lg break-words whitespace-normal max-w-full">
            {task.title}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="bg-orange-300 px-2 py-1 text-lg rounded-sm"
            onClick={() => setIsEditing(true)}
          >
            edit
          </button>
          <button
            className="bg-red-400 px-2 py-1 text-lg rounded-sm"
            onClick={() => onDelete(task.id)}
          >
            delete
          </button>
        </div>
      </div>
    );
  }

  return <div className="w-full">{content}</div>;
};

export default Task;
