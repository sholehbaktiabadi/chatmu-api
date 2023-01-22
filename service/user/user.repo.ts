import { DataSource, Repository } from "typeorm";
import { User } from "../../entity/user";

export class UserRepository{
    private userRepo: Repository<User>
    constructor(db: DataSource){
        this.userRepo= db.getRepository(User)
    }

    async userDetails(id: string){
        return await this.userRepo.findOne({ where: { id } })
    }
}