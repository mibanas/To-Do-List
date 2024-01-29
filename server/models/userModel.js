const mongoose = require('mongoose')

const schemaUser = mongoose.Schema({
    username : {
        type : String,
        require : true,
        trim : true,
    },
    email : {
        type : String,
        require : true,
        trim : true,
    },
    password : {
        type : String,
        require : true,
        trim : true,
    },
    token : {
        type : String,
        require : true,
    }
})

const modelUser = mongoose.model('Users', schemaUser)

module.exports = modelUser