import axios from 'axios';

export const getAllTasks = async () => {
  try {
    const allTasks = await axios.get('http://localhost:3020/task/alltasks');
    return allTasks.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches :', error.message);
    throw error;
  }
};

export const deleteTaskById = async (taskId) => {
  try {
    const response = await axios.put(`http://localhost:3020/task/deletetask/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression de la tâche :', error.message);
    throw error;
  }
}

export const changeStatusById = async (taskId) => {
  try {
    const response = await axios.put(`http://localhost:3020/task/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression de la tâche :', error.message);
    throw error;
  }
}