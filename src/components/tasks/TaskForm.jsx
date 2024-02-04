import React from "react";
import {
  Button,
  Label,
  Modal,
  TextInput,
  Textarea,
  Select,
  Datepicker,
} from "flowbite-react";
import { useState } from "react";
import { addTask } from "../../services/api/tasks/Task";

function TaskForm({ loadTasks }) {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState(new Date());

  const onCloseModal = () => {
    setOpenModal(false);
    setTitle("");
    setDescription("");
    setPriority("Low");
    setDeadline(new Date());
  };

  const handleAddTask = async () => {
    try {
      await addTask({
        title: title,
        description: description,
        priority: priority,
        deadline: deadline.toISOString(),
      });

      loadTasks();
      onCloseModal();
    } catch (error) {
      console.error("Error adding task:", error.message);
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Request setup error:", error.message);
      }
    }
  };

  return (
    <>
      <Button
        className="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-100 font-bold py-2 px-4 border border-gray-700 dark:border-gray-600 rounded"
        onClick={() => setOpenModal(true)}
      >
        New Task
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add New Task
            </h3>
            <div>
              <div className="mb-2 block">
                <Label value="Title" />
              </div>
              <TextInput
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Description" />
              </div>
              <Textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                type="text"
                required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="priority" value="Priority" />
              </div>
              <Select
                id="priority"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
                required
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Select>
            </div>{" "}
            <div className="mb-2 block">
              <Label htmlFor="date" value="Duree" />
            </div>
            <Datepicker
              id="deadline"
              selected={deadline}
              onChange={(date) => setDeadline(date)}
            />
            <div className="w-full">
              <Button onClick={handleAddTask}>Add</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TaskForm;
