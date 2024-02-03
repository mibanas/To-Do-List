import { useEffect, useState } from 'react';
import { getAllTasks } from '../../services/api/tasks/Task';

const useTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const tasksData = await getAllTasks()
      setTasks(tasksData.data);
    } catch (error) {
      console.error('Erreur lors du chargement des tâches :', error.message);
    }
  };

  return { tasks, loadTasks };
};

export default useTask;