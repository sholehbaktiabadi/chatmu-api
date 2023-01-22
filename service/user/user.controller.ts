import { error, success } from "../../utils/response";
import { UserRepository } from "./user.repo";
import { Request, Response } from 'express';

export class UserController{
    constructor(private userRepo: UserRepository){}

    async getDetails(req: Request, res: Response){
        try {
            const data = await this.userRepo.userDetails(req.params.id)
            if(!data) return error(res, 400, 'data not found')
            return success(res, data)
        } catch (err) {
            return error(res, 500)
        }
    }
}