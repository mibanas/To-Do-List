import React from 'react'
import { Badge } from 'flowbite-react';
import useTask from '../../hooks/tasks/useTask';
import { useEffect } from 'react';
import { format, differenceInDays } from 'date-fns';
import './scroll.css' 
import { deleteTaskById, changeStatusById } from '../../services/api/tasks/Task';


const TaskCard = ({ taskType, allTasks, loadTasks }) => {
    const colorsPStatus = {
        to_Do : "info",
        in_Progress : "warning",
        done : "success"
    }
	 const getStatusColor = (status) => {
		switch (status) {
		  case 'To Do':
			 return colorsPStatus.to_Do;
		  case 'In Progress':
			 return colorsPStatus.in_Progress;
		  case 'Done':
			 return colorsPStatus.done;
		  default:
			 return 'info'; 
		}
	 };

    const colorPriority = {
        low : "success",
        medium : "warning",
        high : "failure"
    }

	 const getPriorityColor = (priority) => {
		switch (priority) {
		  case 'Low':
			 return colorPriority.low;
		  case 'Medium':
			 return colorPriority.medium;
		  case 'High':
			 return colorPriority.high;
		  default:
			 return 'info'; 
		}
	 };


    const cardColor = {
        doit : "#3652AD",
        inprogress : "#D83F31",
        done : "#17594A"
    }

	 const getCardColor = (taskType) => {
		switch (taskType) {
			case 'To Do':
			  return cardColor.doit;
			case 'In Progress':
			  return cardColor.inprogress;
			case 'Done':
			  return cardColor.done;
			default:
			  return '#3652AD'; 
		 }
	 };



	 const handleDeleteTask = async (taskId) => {
		try {
		  await deleteTaskById(taskId);
		  loadTasks();
		} catch (error) {
		  console.error('Error deleting task:', error.message);
		}
	 };

	 const handleChangeStatus = async (taskId) => {
		try {
		  await changeStatusById(taskId);
		  loadTasks();
		} catch (error) {
		  console.error('Error deleting task:', error.message);
		}
	 };

    const tasksToDoData = allTasks.filter(task => {
        return task.task_status === taskType;
    });
      
  return (
    // <div class="bg-[#3652AD] rounded-xl p-5">
    // <div className={`bg-[${status.inprogress}] rounded-xl p-5`}>

        
        <div>
            <ul>
                {tasksToDoData.map(task => (
                     <div className="rounded-xl p-5 m-3" style={{ backgroundColor: `${getCardColor(taskType)}`}}> 
                        <p class="text-[#E9F6FF] font-bold text-lg pb-2 uppercase">{ task.title }</p>
                        <p class="text-white pb-2">{ task.description }</p>
                        <div class="flex flex-wrap gap-2 pb-2">
									<Badge color={getStatusColor(task.task_status)}>{task.task_status}</Badge>
									<Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
                        </div>
                        <div class="flex flex-wrap gap-2 pb-2">
                            { taskType !== "Done" &&
                                <>
                                    <Badge color="indigo">Start at : {format(new Date(task.creation_date), 'dd/MM/yyyy')}</Badge>
                                    <Badge color="indigo">Deadline : {format(new Date(task.deadline), 'dd/MM/yyyy')}</Badge>
                                    <Badge color="pink">you have : {differenceInDays(task.creation_date, task.deadline)} days left</Badge>
                                </>
                            }
                            { taskType === "Done" &&
                                <Badge color="success">Finiched at : {format(new Date(task.deadline), 'dd/MM/yyyy')}</Badge>
                            }
                        </div>
                    
                        <div class="w-full flex justify-end pt-2">
                            { taskType === "To Do" &&
                                <button onClick={() => handleChangeStatus(task._id)}>
                                    <svg class={`w-[30px] h-[30px] text-[#FFFFFF] dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" >
                                        <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd"/>
                                    </svg>
                                </button>
                            }
                            { taskType === "In Progress" &&
                                <button onClick={() => handleChangeStatus(task._id)}>
                                    <svg class={`w-[30px] h-[30px] text-[#FFFFFF] dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="m5 12 4.7 4.5 9.3-9"/>
                                    </svg>
                                </button>
                            }
									 <button>
										<svg class="w-[30px] h-[30px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
											<path fill-rule="evenodd" d="M15.5 3.3a1 1 0 0 0-1.4 0l-2 2h.1l6.5 6.5 2-1.9c.4-.4.4-1 0-1.4l-5.2-5.2ZM7 8.3l3.9-1.5 6.3 6.3-1.5 3.9a1 1 0 0 1-.6.6l-9.5 3.3a1 1 0 0 1-1-.1l6.5-6.5A1 1 0 0 0 9.7 13l-6.5 6.4a1 1 0 0 1-.1-1L6.4 9c.1-.3.3-.5.6-.6Z" clip-rule="evenodd"/>
										</svg>
									 </button>
									 { 
										<button onClick={() => handleDeleteTask(task._id)}>
											<svg class="w-[30px] h-[30px] text-[#FFFFFF] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M6 18 18 6m0 12L6 6"/>
											</svg>
										</button>
									 }
                        </div>
                
                    </div>
                ))}
            </ul>
        </div>
  )
}

export default TaskCard