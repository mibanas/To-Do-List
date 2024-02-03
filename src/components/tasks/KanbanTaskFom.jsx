import React from 'react'
import { Datepicker } from 'flowbite-react';

const KanbanTaskFom = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

	const handleFormSubmit = (event) => {
		// Handle form submission logic here
		event.preventDefault();
		// You can collect form data and send it to the server
		// For example, you might use fetch or axios to make a POST request
		// with the form data to the server
	  };

	return (
		<div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
			<div className="bg-black opacity-50 fixed inset-0"></div>
			<div className="bg-white p-6 rounded-xl shadow-md z-10 w-5/12">
				<h2 className="text-2xl mb-4">Add Task</h2>
				<form onSubmit={handleFormSubmit}>
					<div className="mb-4">
						<label htmlFor="title" className="block text-sm font-medium text-gray-600">
							Title:
						</label>
						<input
							type="text"
							id="title"
							name="title"
							className="mt-1 p-2 border rounded-md w-full"
							required
						/>
					</div>
					<div className="mb-4">
					<label htmlFor="description" className="block text-sm font-medium text-gray-600">
						Description:
					</label>
					<textarea
						id="description"
						name="description"
						rows="3"
						className="mt-1 p-2 border rounded-md w-full"
						required
					></textarea>
					</div>
					<div className="mb-4">
					<label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
						Deadline:
					</label>
					<Datepicker
						id="deadline"
						name="deadline"
						className="mt-1 rounded-md w-full"
						defaultValue={new Date()}
						// Add necessary props for date picking, such as onChange
					/>
					</div>
					<div className="mb-4">
						<label htmlFor="priority" className="block text-sm font-medium text-gray-600">
						Priority:
						</label>
						<select
							id="priority"
							name="priority"
							className="mt-1 p-2 border rounded-md w-full"
							// value={priority}
							// onChange={(e) => setPriority(e.target.value)}
						>
							<option value="Low">Low</option>
							<option value="Medium">Medium</option>
							<option value="High">High</option>
						</select>
					</div>
					<div className="flex justify-end">
					<button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
						Add Task
					</button>
					<button type="button" className="ml-2 text-gray-500" onClick={onClose}>
						Cancel
					</button>
					</div>
				</form>
			</div>
	  	</div>
	)
}

export default KanbanTaskFom