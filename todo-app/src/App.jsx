import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-black text-white p-4">
        <h2 className="text-xl font-bold">Todo App</h2>
      </nav>

      <main className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-5">My Todo List</h1>

        <div className="flex gap-2">
          <input
            className="border p-2 flex-1 rounded"
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        <ul className="mt-5">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-3"
            >
              <span>{item}</span>

              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>

    </div>
  );
}

export default App;