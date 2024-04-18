import express from "express";
import {userController} from './usuarios.controller';

const userRoutes = express.Router();

userRoutes.get('/', userController.getUsers)
userRoutes.get('/:id',userController.getUserById)

export default userRoutes