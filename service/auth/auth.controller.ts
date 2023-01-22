import { Request, Response } from "express";
import { error, success } from "../../utils/response";
import { UserDto } from "../user/user.dto";
import { AuthRepository } from "./auth.repo";
import { generateToken } from "../../utils/jwt";

export class AuthController{
    constructor(private authRepo: AuthRepository){}

    async register(req: Request, res: Response){
        try {
            const { username, email } : UserDto = req.body
            const data = await this.authRepo.create({ username, email })
            return success(res, data)
        } catch (err) {
            return error(res, 500)
    }
    }

    async login(req: Request, res: Response){
        try {
            const { email, password } : UserDto = req.body
            const isEmailExist = await this.authRepo.findByEmail(email)
            if(!isEmailExist) return error(res, 400, 'user is not registered')
            if(isEmailExist.password != password) return error(res, 400, 'password doesnt match!')
            const token = generateToken({ id: isEmailExist.id, username: isEmailExist.username })
            return success(res, {...isEmailExist, password: null, token})
        } catch (err) {
            return error(res, 500)
    }
    }
}