import React, { useState } from "react";
import { Datepicker } from "flowbite-react";
import { addTask } from "../../services/api/tasks/Task";

const TaskForm = ({ isOpen, onClose, loadTasks }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: new Date(),
    priority: "Low",
  });

  if (!isOpen) return null;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await addTask(formData);

      if (response.success) {
        console.log("Tâche ajoutée avec succès :", response.data);
        onClose();
        await loadTasks();
      } else {
        console.error("Erreur lors de l'ajout de la tâche :", response.error);
      }
    } catch (error) {
      console.error("Erreur lors de la requête POST :", error);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white p-6 rounded-xl shadow-md z-10 w-5/12">
        <h2 className="text-2xl mb-4">Add Task</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              onChange={handleInputChange}
              name="title"
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleInputChange}
              rows="3"
              className="mt-1 p-2 border rounded-md w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-600"
            >
              Deadline:
            </label>
            <Datepicker
              id="deadline"
              name="deadline"
              onChange={handleInputChange}
              className="mt-1 rounded-md w-full"
              value={formData.deadline}
              defaultValue={new Date()}
              // Add necessary props for date picking, such as onChange
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-600"
            >
              Priority:
            </label>
            <select
              id="priority"
              name="priority"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Add Task
            </button>
            <button
              type="button"
              className="ml-2 text-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
