const modelUser = require('../models/userModel')

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const checkUser = await modelUser.findOne({
            email : email
        })
    } catch (error) {
        
    }
}