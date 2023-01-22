import { DataSource, Repository } from "typeorm";
import { User } from "../../entity/user";
import { UserDto } from "../user/user.dto";

export class AuthRepository{
    private userRepo: Repository<User>
    constructor(db: DataSource){
        this.userRepo= db.getRepository(User)
    }

    async create(dto: UserDto){
        return await this.userRepo.save(dto)
    }

    async findById(id: string){
        return await this.userRepo.findOne({ where: { id } })
    }    

    async findByEmail(email: string){
        return await this.userRepo.findOne({ where: { email } })
    }
    
}