import React, { useState, useEffect } from 'react';
import { Datepicker } from 'flowbite-react';
import { addTask, updateTask } from '../../services/api/tasks/Task';

const KanbanUpdateTask = ({ isOpen, onClose, loadTasks, selectedTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: new Date(),
    priority: 'Low',
  });

  useEffect(() => {
    if (selectedTask) {
      setFormData({
        title: selectedTask.title || '',
        description: selectedTask.description || '',
        deadline: new Date(selectedTask.deadline) || new Date(),
        priority: selectedTask.priority || 'Low',
      });
    }
  }, [selectedTask]);

  if (!isOpen) return null;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (selectedTask) {
        const response = await updateTask(selectedTask.id, formData);

        if (response.success) {
          console.log('Tâche mise à jour avec succès :', response.data);
          onClose();
          loadTasks();
        } else {
          console.error('Erreur lors de la mise à jour de la tâche :', response.error);
        }
      } else {
        const response = await addTask(formData);

        if (response.success) {
          console.log('Tâche ajoutée avec succès :', response.data);
          onClose();
          loadTasks();
        } else {
          console.error('Erreur lors de l\'ajout de la tâche :', response.error);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST/PUT :', error);
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white p-6 rounded-xl shadow-md z-10 w-5/12">
        <h2 className="text-2xl mb-4">Mettre à jour la tâche</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Titre :
            </label>
            <input
              type="text"
              id="title"
              onChange={handleInputChange}
              name="title"
              className="mt-1 p-2 border rounded-md w-full"
              required
              value={selectedTask._id}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description :
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleInputChange}
              rows="3"
              className="mt-1 p-2 border rounded-md w-full"
              required
              value={selectedTask.description}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
              Date limite :
            </label>
            <Datepicker
              id="deadline"
              name="deadline"
              onChange={handleInputChange}
              className="mt-1 rounded-md w-full"
              defaultValue={selectedTask.deadline}
              // Ajouter les propriétés nécessaires pour la sélection de la date, telles que onChange
            />
          </div>
          <div className="mb-4">
            <label htmlFor="priority" className="block text-sm font-medium text-gray-600">
              Priorité :
            </label>
            <select
              id="priority"
              name="priority"
              className="mt-1 p-2 border rounded-md w-full"
              value={selectedTask.priority}
              onChange={handleInputChange}
            >
              <option value="Low">Faible</option>
              <option value="Medium">Moyenne</option>
              <option value="High">Élevée</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Mettre à jour la tâche
            </button>
            <button type="button" className="ml-2 text-gray-500" onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KanbanUpdateTask;
