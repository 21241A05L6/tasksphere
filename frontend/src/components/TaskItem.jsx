import axios from "axios";

function TaskItem({ task, fetchTasks }) {
  const token = localStorage.getItem("token");

  const toggleComplete = async () => {
    await axios.put(
      `http://localhost:5000/api/tasks/${task._id}`,
      { completed: !task.completed },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTasks();
  };

  const deleteTask = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${task._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks();
  };

  // Format createdAt to a readable date & time
  const formattedDate = new Date(task.createdAt).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div
      className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50 hover:bg-gray-100 p-4 rounded-lg mb-3 transition"
    >
      <div
        onClick={toggleComplete}
        className={`flex-1 cursor-pointer text-lg font-medium ${
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.title}
      </div>

      <div className="text-sm text-gray-500 mt-1 sm:mt-0 sm:ml-3">
        Added on: {formattedDate}
      </div>

      <button
        onClick={deleteTask}
        className="text-red-500 hover:text-red-700 font-medium mt-2 sm:mt-0 sm:ml-3"
      >
        ✕
      </button>
    </div>
  );
}

export default TaskItem;
