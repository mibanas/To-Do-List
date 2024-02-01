import React from "react";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";

const Mybacklog = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Backlog
          </h1>
        </div>
        <div className="flex justify-end">
          <TaskForm />
        </div>
      </div>

      <TaskList />
    </div>
  );
};

export default Mybacklog;
