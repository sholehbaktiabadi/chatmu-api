import { Router } from "express";
import { AppDataSource } from "../../config/db";
import { AuthController } from "./auth.controller";
import { AuthRepository } from "./auth.repo";

const prefix= (path?: string) => `/auth/${path}`
const router = Router()
const authRepo = new AuthRepository(AppDataSource)
const authController = new AuthController(authRepo)

export const authRouter = [
    router.post(prefix('register'), (req, res)=> authController.register(req, res)),
    router.post(prefix('login'), (req, res)=> authController.login(req, res))
]
