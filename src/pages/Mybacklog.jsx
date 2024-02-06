import { React, useEffect, useState } from "react";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import useTask from "../hooks/tasks/useTask";

const Mybacklog = () => {
  const { tasks, loadTasks } = useTask();
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const openPopUp = () => {
    setPopUpOpen(true);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
  };
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Backlog
          </h1>
        </div>

        <div className="flex justify-end">
          <button className="w-full flex justify-end" onClick={openPopUp}>
            <svg
              className="w-[48px] h-[48px] text-blue-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                d="M12 7.8v8.4M7.8 12h8.4m4.8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <TaskList loadTasks={loadTasks} allTasks={tasks} />
      <TaskForm
        isOpen={isPopUpOpen}
        onClose={closePopUp}
        loadTasks={loadTasks}
      />
    </div>
  );
};

export default Mybacklog;
