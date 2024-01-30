const modelUser = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    const { email, password } = req.body;
      
    try {
        const user = await modelUser.findOne({ email: email })
  
        if (!user) {
            return res.status(404).json({
            success: false,
            message: "Email already exist or password is wrong!",
            })
        }
                
        const passwordMatch = await bcrypt.compare(password, user.password)
                
        if (passwordMatch) {
            
            const secret = process.env.SECRET_KEY
            const payload = {
                name: user.username,
                email: user.email,
            }
            const options = {
                expiresIn: '1h',
                algorithm: 'HS256',
            }
            
            const tokenGenereted = jwt.sign(payload, secret, options)
            const updateToken = await modelUser.findOneAndUpdate(
                { email : user.email },
                { $set: { token: tokenGenereted } },
                { new: true } 
                );
                    
        return res.status(200).json({
            success: true,
            message: "User is authenticated",
            user: updateToken.username,
            token : tokenGenereted,
        })
      }
  
      res.status(400).json({
        success: false,
        message: "Email already exist or password is wrong!",
      })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
      })
    }
}

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const checkEmail = await modelUser.findOne({
      email: email,
    });
    if (checkEmail) {
      return res.status(400).json({
        sucess: true,
        message: "User already exists",
      });
    }
    const cryptedPassword = await bcrypt.hash(password, 10);
    const addUser = await modelUser.create({
      username: username,
      email: email,
      password: cryptedPassword,
    });
    return res.status(201).json({
      sucess: true,
      message: "User created successfully",
      data: addUser,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      message: "Something went wrong",
    });
  }
};
