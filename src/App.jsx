import { useState } from "react";
import Input from "./components/Input";
import Task from "./components/Task";
let nextId = 3; // Properly initializing the ID

const tasks = [
  {
    id: nextId++,
    title: "learn react",
  },
  {
    id: nextId++,
    title: "learn next",
  },
];

const App = () => {
  const [taskList, setTaskList] = useState(tasks);

  const handleAddTask = (text) => {
    setTaskList((prevState) => {
      const newTask = {
        id: nextId++,
        title: text,
      };
      return [...prevState, newTask];
    });
  };

  const handleDeleteTask = (id) => {
    setTaskList((prevState) => {
      return prevState.filter((task) => task.id !== id);
    });
  };

  const handleChangeTask = (item) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === item.id) {
          return item;
        } else {
          return task;
        }
      })
    );
  };

  const handleClear = () => {
    setTaskList(() => {
      return [];
    });
  };

  return (
    <div className="flex justify-center bg-gradient min-h-screen">
      <div className="flex flex-col items-center gap-4 shadow-md px-6 py-8 m-4 bg-white rounded-md w-[340px] sm:w-[450px]">
        <h1 className="flex text-2xl font-bold pb-2">To do app</h1>
        <Input onAddTask={handleAddTask} />
        <div className="w-full">
          {taskList.map((task) => (
            <div key={task.id}>
              <Task
                task={task}
                onChange={handleChangeTask}
                onDelete={handleDeleteTask}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center flex-wrap gap-4 pt-2">
          <p className="text-black text-md">
            you have {taskList.length} active tasks
          </p>
          <button
            className="bg-indigo-400 px-2 py-1 text-lg rounded-sm"
            onClick={handleClear}
          >
            clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
