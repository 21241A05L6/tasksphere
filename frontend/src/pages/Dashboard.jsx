import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import TaskItem from "../components/TaskItem";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/api/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/api/tasks",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTitle("");
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 pt-28 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8">
          📝 TaskSphere Dashboard
        </h1>

        {/* Task Input */}
        <form
          onSubmit={addTask}
          className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 mb-8"
        >
          <input
            className="border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg sm:rounded-l-lg w-full sm:w-2/3 shadow-sm"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg sm:rounded-r-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        {/* Tasks List */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">No tasks yet. Add one above!</p>
          ) : (
            tasks.map((t) => (
              <TaskItem key={t._id} task={t} fetchTasks={fetchTasks} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
