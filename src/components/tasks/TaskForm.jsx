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

function TaskForm() {
  const [openModal, setOpenModal] = useState(false);
  const [task, setTask] = useState("");
  function onCloseModal() {
    setOpenModal(false);
    setTask("");
  }
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
                <Label htmlFor="text" value="Title" />
              </div>
              <TextInput
                id="title"
                value={task}
                onChange={(event) => setTask(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Description" />
              </div>
              <Textarea id="description" type="text" required />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="priority" value="Priority" />
              </div>
              <Select id="countries" required>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Select>
            </div>{" "}
            <div className="mb-2 block">
              <Label htmlFor="date" value="Duree" />
            </div>
            <Datepicker />
            <div className="w-full">
              <Button>Add</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TaskForm;
