const modelTask = require('../models/taskModel')


exports.addTask = async (req, res) => {
    const { title, description, priority, user_id } = req.body;
    try {
        const newTask = await modelTask.create({
            title,
            description,
            priority,
            user_id,
        });

        return res.status(201).json({
            success: true,
            data: newTask,
            message: 'La tâche a été ajoutée avec succès.',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Erreur lors de l\'ajout de la tâche. Veuillez réessayer.',
        });
    }
};