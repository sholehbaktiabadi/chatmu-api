import { DataSource } from "typeorm"
import { User } from "../entity/user"
import { LoadEnv } from "./env"

const env = LoadEnv()
export const AppDataSource = new DataSource({
    type: "mysql",
    host: env.MYSQL_HOST,
    port: env.MYSQL_PORT,
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    entities: [User],
    synchronize: true,
    logging: ['query'],
})