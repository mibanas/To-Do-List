const express = require('express')
const routes = express.Router()
const { login } = require('../controllers/userController') 

routes.get('/login', login)