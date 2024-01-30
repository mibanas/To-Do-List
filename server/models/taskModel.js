const mongoose = require('mongoose');

const schemaTask = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    }, 
    task_status : {
        type : String,
        enum: ['To Do', 'In Progress', 'Done'], 
        default: 'To Do',
    },
    creation_date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', 
    },
},
    { timestamps : true }
);

const modelTask = mongoose.model('Tasks', schemaTask);

module.exports = modelTask;
