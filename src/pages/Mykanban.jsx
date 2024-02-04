import {React, useEffect, useState } from 'react'
import TaskCard from '../components/tasks/TaskCard'
import useTask from '../hooks/tasks/useTask';
import KanbanTaskFom from '../components/tasks/KanbanTaskFom';


const Mykanban = () => {

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
		<div className="flex flex-col items-center justify-center">
			<div className="flex justify-between">
				
				<div className="flex flex-col items-center w-4/12 bg-blue-300 m-3 rounded-[40px] h-[90vh] p-3 ">
				<button className="w-full flex justify-end" onClick={openPopUp}>
					<svg className="w-[48px] h-[48px] text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12 7.8v8.4M7.8 12h8.4m4.8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
					</svg>
				</button>
				<p className="py-5 text-white text-2xl font-bold" >TO DO</p>
					<div className="w-full flex flex-col overflow-x-hidden overflow-y-auto">
						<TaskCard taskType="To Do" allTasks={tasks} loadTasks={loadTasks}/>
					</div>
				</div>

				<div className="flex flex-col items-center w-4/12 bg-yellow-300 m-3 rounded-[40px] h-[90vh] p-3 ">
				<div className="w-full flex justify-end opacity-0">
					<svg className="w-[48px] h-[48px] text-yellow-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12 7.8v8.4M7.8 12h8.4m4.8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
					</svg>
				</div>
				<p className="py-5 text-white text-2xl font-bold " >IN PROGRESS</p>
					<div className="w-full flex flex-col overflow-x-hidden overflow-y-auto">
						<TaskCard taskType="In Progress"  allTasks={tasks} loadTasks={loadTasks}/>	
					</div>
				</div>

				<div className="flex flex-col items-center w-4/12 bg-green-300 m-3 rounded-[40px] h-[90vh] p-3 ">
				<div className="w-full flex justify-end opacity-0">
					<svg className="w-[48px] h-[48px] text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12 7.8v8.4M7.8 12h8.4m4.8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
					</svg>
				</div>
				<p className="py-5 text-white text-2xl font-bold" >DONE</p>
					<div className="w-full flex flex-col overflow-x-hidden overflow-y-auto">
						<TaskCard taskType="Done" allTasks={tasks} loadTasks={loadTasks}/>	
					</div>
				</div>

			</div>
			<KanbanTaskFom isOpen={isPopUpOpen} onClose={closePopUp} loadTasks={loadTasks}/>
		</div>
  )
}

export default Mykanban