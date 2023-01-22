import { Router } from "express";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repo";
import { AppDataSource } from "../../config/db";

const route = Router()
const prefix = '/user'
const userRepo = new UserRepository(AppDataSource)
const userController = new UserController(userRepo)

export const userRoutes = [
    route.get(prefix + '/:id', (req, res)=> userController.getDetails(req, res))
]

