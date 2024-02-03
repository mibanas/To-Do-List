const modelTask = require("../models/taskModel");

exports.addTask = async (req, res) => {
	const { title, description, priority,deadline } = req.body;
	try {
		const newTask = await modelTask.create({
		title,
		description,
		priority,
		deadline,
		user_id : '65b8de064a05a780a4a18cc9',
		});

		return res.status(201).json({
		success: true,
		data: newTask,
		message: "La tâche a été ajoutée avec succès.",
		});
	} catch (error) {
		return res.status(500).json({
		success: false,
		error: "Erreur lors de l'ajout de la tâche. Veuillez réessayer.",
		});
	}
};

exports.getAll = async (req, res) => {
	try {
		const tasks = await modelTask.find({ is_deleted: false });
		return res.status(200).send({
		success: true,
		data: tasks,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
		success: false,
		message: "Internal Server Error",
		});
	}
	};

	exports.updateTask = async (req, res) => {
	const { id } = req.params;
	const { title, description, priority } = req.body;
	try {
		const updatedTask = await modelTask.findByIdAndUpdate(
		id,
		{
			title,
			description,
			priority,
		},
		{ new: true }
		);
		return res.status(200).json({
		success: true,
		data: updatedTask,
		message: "La tâche a été modifiée avec succès.",
		});
	} catch (error) {
		return res.status(500).json({
		success: false,
		error: "Erreur lors de la modification de la tâche. Veuillez réessayer.",
		});
	}
};

exports.changeStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await modelTask.findById({
      _id: id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        error: "Tâche non trouvée",
      });
    }

    if (task.task_status === 'To Do') {
      const updateStatus = await modelTask.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          task_status: 'In Progress',
        },
        { new: true } // Pour obtenir la version mise à jour du document
      );

      return res.status(201).json({
        success: true,
        data: updateStatus,
      });
    } else if (task.task_status === 'In Progress') {
      const updateStatus = await modelTask.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          task_status: 'Done',
		  finiching_date : new Date()
        },
        { new: true }
      );

      return res.status(201).json({
        success: true,
        data: updateStatus,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Statut déjà terminé !',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Erreur lors de la modification de la tâche. Veuillez réessayer.",
    });
  }
};

exports.deleteTask = async (req, res) => {
	const { id } = req.params;
	try {
	  const taskToDelete = await modelTask.findById(id);
  
	  if (!taskToDelete) {
		return res.status(404).json({
		  success: false,
		  error: "Tâche non trouvée",
		});
	  }
  
	  const deletedTask = await modelTask.findByIdAndUpdate(
		{
		  _id: id,
		},
		{
		  is_deleted: true,
		},
		{ new: true }
	  );
  
	  return res.status(200).json({
		success: true,
		data: deletedTask,
		message: "Tâche supprimée avec succès",
	  });
	} catch (error) {
	  return res.status(500).json({
		success: false,
		error: "Erreur lors de la suppression de la tâche. Veuillez réessayer.",
	  });
	}
};
  

