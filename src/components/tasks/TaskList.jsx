import React from "react";
import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import {
  deleteTaskById,
  changeStatusById,
} from "../../services/api/tasks/Task";
import KanbanUpdateTask from "./KanbanUpdateTask";

function TaskList({ loadTasks, allTasks }) {
  const [openModal, setOpenModal] = useState(false);
  // const { tasks, loadTasks } = useTask();
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);
  const [openPopUps, setOpenPopUps] = useState({});

  const togglePopUp = (taskId) => {
    setOpenPopUps((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const tasks = allTasks;

  const handleDeleteTask = async () => {
    try {
      if (taskIdToDelete) {
        await deleteTaskById(taskIdToDelete);
        loadTasks();
        setOpenModal(false);
      }
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };
  const handleChangeStatus = async (taskId) => {
    try {
      await changeStatusById(taskId);
      loadTasks();
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  return (
    <>
      <div className="mt-12">
        <Table>
          <Table.Head className="text-white text-center">
            <Table.HeadCell className="bg-customBlue">Title</Table.HeadCell>
            <Table.HeadCell className="bg-customBlue">
              Descreption
            </Table.HeadCell>
            <Table.HeadCell className="bg-customBlue">Status</Table.HeadCell>
            <Table.HeadCell className="bg-customBlue">Priority</Table.HeadCell>
            <Table.HeadCell className="bg-customBlue">Actions</Table.HeadCell>
            <Table.HeadCell className="bg-customBlue ">
              <span className="sr-only">actions</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-center">
            {tasks.map((task) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {task.title}
                </Table.Cell>
                <Table.Cell>{task.des}</Table.Cell>
                <Table.Cell>{task.task_status}</Table.Cell>
                <Table.Cell>{task.priority}</Table.Cell>
                <Table.Cell className="flex ml-10">
                  {task.task_status !== "Done" ? (
                    <Button
                      className="bg-inherit"
                      onClick={() => handleChangeStatus(task._id)}
                    >
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 18V6l8 6-8 6Z"
                        />
                      </svg>
                    </Button>
                  ) : (
                    <Button className="invisible w-16">done</Button>
                  )}

                  <Button
                    className="bg-inherit"
                    onClick={() => togglePopUp(task._id)}
                  >
                    <svg
                      className="w-6 h-6 text-sky-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
                      />
                    </svg>
                  </Button>

                  <Button
                    onClick={() => {
                      setTaskIdToDelete(task._id);
                      setOpenModal(true);
                    }}
                    className="bg-inherit"
                  >
                    {" "}
                    <svg
                      className="w-6 h-6 text-red-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                      />
                    </svg>
                  </Button>
                  <KanbanUpdateTask
                    isOpen={openPopUps[task._id]}
                    onClose={() => togglePopUp(task._id)}
                    loadTasks={loadTasks}
                    selectedTask={task}
                  />
                  <Modal
                    show={openModal}
                    size="md"
                    onClose={() => setOpenModal(false)}
                    popup
                  >
                    <Modal.Header />
                    <Modal.Body>
                      <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                          Are you sure you want to delete this Task?
                        </h3>
                        <div className="flex justify-center gap-4">
                          <Button
                            color="failure"
                            onClick={() => {
                              handleDeleteTask(task._id);
                            }}
                          >
                            {"Yes, I'm sure"}
                          </Button>
                          <Button
                            color="gray"
                            onClick={() => setOpenModal(false)}
                          >
                            No, cancel
                          </Button>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default TaskList;
